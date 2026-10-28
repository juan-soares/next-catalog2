"use client";
import {
  FormCheckboxGroupField,
  FormSection,
  FormSelectField,
  FormFileField,
  FormTextField,
} from "@/shared/components/Form";
import type { MediaTypeCode } from "@/modules/media-type/types";
import type { AttributeView } from "@/modules/attribute/types";
import { CreateMediaCharacterForm } from "@/modules/media-character/components";
import { CreateMediaFileForm } from "@/modules/media-file/components";
import { useMediaForm } from "@/modules/media/hooks";
import type { MediaView } from "@/modules/media/types";
import { CreateMediaGameForm } from "../CreateMediaGameForm";

type Props = {
  typeCode: MediaTypeCode;
  languages: AttributeView[];
  themes: AttributeView[];
  platforms: AttributeView[];
  genres: AttributeView[];
  gameplays: AttributeView[];
  modes: AttributeView[];
  medias: MediaView[];
  franchises: [];
};

export function CreateMediaForm({
  typeCode,
  languages,
  themes,
  medias,
  platforms,
  genres,
  gameplays,
  modes,
  franchises,
}: Props) {
  const {
    handleSubmit,
    mediaInput,
    handleChange,
    handleGameInfoChange,
    handleUpdateCharactersList,
    setMediaInput,
    handleAddMediaFile,
    handleRemoveMediaFile,
  } = useMediaForm(typeCode);

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

      <FormSection title="Detalhes do Jogo">
        <CreateMediaGameForm
          media={mediaInput}
          platforms={platforms}
          genres={genres}
          gameplays={gameplays}
          modes={modes}
          onGameInfoChange={handleGameInfoChange}
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
          onInclude={handleAddMediaFile}
          onRemove={handleRemoveMediaFile}
        />
      </FormSection>

      <button type="submit">Enviar</button>
    </form>
  );
}
