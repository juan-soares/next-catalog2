"use client";

import { useState } from "react";
import type { Attribute } from "@/modules/attribute/types";
import { CreateMediaCharacterForm } from "@/modules/media-character/components";
import type { CreateMediaCharacterInput } from "@/modules/media-character/types";
import { createMediaAction } from "@/modules/media/actions";
import type { CreateMediaInput, MediaDetails } from "@/modules/media/types";
import {
  FormCheckboxGroupField,
  FormSection,
  FormSelectField,
  FormFileField,
  FormTextField,
} from "@/shared/components/Form";

type Props = {
  attributes: Attribute[];
  medias: MediaDetails[];
  franchises: [];
};

const initialMediaInput: CreateMediaInput = {
  title: "",
  translatedTitle: "",
  synopsis: "",
  languages: [],
  themes: [],
  franchise: "",
  cover: null,
  files: [],
  characters: [],
};

export function CreateMediaForm({ attributes, medias, franchises }: Props) {
  const [mediaInput, setMediaInput] = useState<CreateMediaInput>({
    ...initialMediaInput,
  });
  const languages = attributes.filter(({ type }) => type.field === "languages");
  const themes = attributes.filter(({ type }) => type.field === "themes");
  const [characters, setCharacters] = useState<CreateMediaCharacterInput[]>([]);

  const handleChange = <K extends keyof CreateMediaInput>(
    name: K,
    value: CreateMediaInput[K],
  ) => {
    setMediaInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    formData.set(
      "characters",
      JSON.stringify(
        characters.map(({ image, ...character }) => ({
          ...character,
          hasImage: image !== null,
        })),
      ),
    );

    characters.forEach((character, index) => {
      if (character.image) {
        formData.append(`characterImage_${index}`, character.image);
      }
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
        />

        <FormCheckboxGroupField
          label="Temas"
          options={themes}
          fieldName="themes"
          value={mediaInput.themes}
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
        characters={characters}
        setCharacters={setCharacters}
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
          fileType="image/jpeg"
          required
        />
        <FormFileField
          fieldName="trailer"
          label="Trailer"
          fileType="video/mp4"
          required
        />
        <FormFileField
          fieldName="gallery"
          label="Galeria"
          fileType="image/jpeg"
          multiple
        />
      </FormSection>

      <button type="submit">Enviar</button>
    </form>
  );
}
