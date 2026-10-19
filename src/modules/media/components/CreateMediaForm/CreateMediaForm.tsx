"use client";

import { Attribute } from "@/modules/attribute/types";
import { createMediaAction } from "@/modules/media/actions";
import { MediaDetails } from "@/modules/media/types";
import { CreateCharacterInput } from "@/modules/media/components";
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

export function CreateMediaForm({ attributes, medias, franchises }: Props) {
  const languages = attributes.filter(({ type }) => type.field === "languages");
  const themes = attributes.filter(({ type }) => type.field === "themes");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await createMediaAction(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormSection title="Informações Gerais">
        <FormTextField fieldName="title" label="Título" required />
        <FormTextField fieldName="translatedTitle" label="Título Traduzido" />

        <label htmlFor="releaseDate">Data de Lançamento:</label>
        <input type="date" id="releaseDate" name="releaseDate" required />

        <label htmlFor="synopsis">Sinopse</label>
        <textarea id="synopsis" name="synopsis" required />
      </FormSection>

      <FormSection title="Características">
        <FormCheckboxGroupField
          label="Idiomas"
          options={languages}
          fieldName="languages"
        />

        <FormCheckboxGroupField
          label="Temas"
          options={themes}
          fieldName="themes"
        />

        <FormSelectField
          fieldName="franchise"
          label="Franquia"
          options={franchises}
        />
      </FormSection>

      <CreateCharacterInput />

      <FormSection title="Sequência">
        <FormSelectField
          fieldName="sequel"
          label="Continuação"
          options={medias.map(({ id, title }) => ({ id, label: title }))}
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
