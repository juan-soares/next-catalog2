"use client";

import { useState } from "react";
import type { AttributeView } from "@/modules/attribute/types";
import { CreateMediaCharacterForm } from "@/modules/media-character/components";
import type { CreateMediaCharacterInput } from "@/modules/media-character/types";
import type { CreateMediaInput, MediaView } from "@/modules/media/types";
import { createMediaAction } from "@/modules/media/actions";
import {
  FormCheckboxGroupField,
  FormSection,
  FormSelectField,
  FormFileField,
  FormTextField,
} from "@/shared/components/Form";
import { INITIAL_MEDIA_INPUT } from "@/modules/media/consts";
import { CreateMediaFileForm } from "@/modules/media-file/components";
import { CreateMediaFileInput } from "@/modules/media-file/types";

type Props = {
  languages: AttributeView[];
  themes: AttributeView[];

  medias: MediaView[];
  franchises: [];
};

export function CreateMediaForm({
  languages,
  themes,

  medias,
  franchises,
}: Props) {
  const [mediaInput, setMediaInput] = useState<CreateMediaInput>({
    ...INITIAL_MEDIA_INPUT,
  });

  const handleChange = <K extends keyof CreateMediaInput>(
    name: K,
    value: CreateMediaInput[K],
  ) => {
    setMediaInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateCharactersList = (character: CreateMediaCharacterInput) => {
    setMediaInput((prev) => {
      const exists = prev.characters.some(
        (item) => item.name === character.name,
      );

      return {
        ...prev,
        characters: exists
          ? prev.characters.map((item) =>
              item.name === character.name ? character : item,
            )
          : [...prev.characters, character],
      };
    });
  };

  const handleAddMediaFile = (file: CreateMediaFileInput) => {
    setMediaInput((prev) => ({
      ...prev,
      files: [...prev.files, file],
    }));
  };

  const handleRemoveMediaFile = (index: number) => {
    setMediaInput((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.set(
      "characters",
      JSON.stringify(
        mediaInput.characters.map(({ image, ...character }) => ({
          ...character,
          hasImage: image !== null,
        })),
      ),
    );

    mediaInput.characters.forEach((character, index) => {
      if (character.image) {
        formData.append(`characterImage_${index}`, character.image);
      }
    });

    formData.set(
      "files",
      JSON.stringify(
        mediaInput.files.map(({ name }, index) => ({
          name,
          fieldName: `mediaFile_${index}`,
        })),
      ),
    );

    mediaInput.files.forEach(({ file }, index) => {
      formData.append(`mediaFile_${index}`, file);
    });

    await createMediaAction(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormSection title="Informações Gerais">
        <FormTextField
          fieldName="title"
          label="Título"
          value={mediaInput.title}
          onChange={handleChange}
          required
        />
        <FormTextField
          fieldName="translatedTitle"
          label="Título Traduzido"
          value={mediaInput.translatedTitle ?? ""}
          onChange={handleChange}
        />

        <label htmlFor="releaseDate">Data de Lançamento:</label>
        <input
          type="date"
          id="releaseDate"
          name="releaseDate"
          value={mediaInput.releaseDate}
          onChange={(e) => handleChange("releaseDate", e.target.value)}
          required
        />

        <label htmlFor="synopsis">Sinopse</label>
        <textarea
          id="synopsis"
          name="synopsis"
          value={mediaInput.synopsis}
          onChange={(e) => handleChange("synopsis", e.target.value)}
          required
        />
      </FormSection>

      <FormSection title="Características">
        <FormCheckboxGroupField
          label="Idiomas"
          options={languages}
          fieldName="languages"
          value={mediaInput.languages}
          onChange={(value) => handleChange("languages", value)}
        />

        <FormCheckboxGroupField
          label="Temas"
          options={themes}
          fieldName="themes"
          value={mediaInput.themes}
          onChange={(value) => handleChange("themes", value)}
        />

        <FormSelectField
          fieldName="franchise"
          label="Franquia"
          options={franchises}
          onChange={(event) =>
            handleChange("franchise", event.currentTarget.value)
          }
        />
      </FormSection>

      <CreateMediaCharacterForm
        characters={mediaInput.characters}
        onConfirm={handleUpdateCharactersList}
        onRemove={(index) =>
          setMediaInput((prev) => ({
            ...prev,
            characters: prev.characters.filter((_, i) => i !== index),
          }))
        }
      />

      <FormSection title="Sequência">
        <FormSelectField
          fieldName="sequel"
          label="Continuação"
          options={medias.map(({ id, title }) => ({ value: id, label: title }))}
          onChange={(event) =>
            handleChange("sequel", event.currentTarget.value)
          }
        />
      </FormSection>

      <FormSection title="Arquivos">
        <FormFileField
          fieldName="cover"
          label="Capa"
          fileType={["image/jpeg"]}
          required
        />
        <FormFileField
          fieldName="trailer"
          label="Trailer"
          fileType={["video/mp4"]}
          required
        />
        <FormFileField
          fieldName="gallery"
          label="Galeria"
          fileType={["image/jpeg"]}
          multiple
        />
        <CreateMediaFileForm
          files={mediaInput.files}
          onAdd={handleAddMediaFile}
          onRemove={handleRemoveMediaFile}
        />
      </FormSection>

      <button type="submit">Enviar</button>
    </form>
  );
}
