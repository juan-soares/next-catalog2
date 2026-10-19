"use client";

import { Attribute } from "@/modules/attribute/types";
import { createMediaAction } from "@/modules/media/actions";
import { MediaDetails } from "@/modules/media/types";
import { CreateCharacterInput } from "@/modules/media/components";
import {
  FormCheckboxGroupField,
  FormSection,
  FormSelectField,
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
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input type="text" id="translatedTitle" name="translatedTitle" />

        <label htmlFor="releaseDate">Data de Lançamento:</label>
        <input type="date" id="releaseDate" name="releaseDate" required />

        <label htmlFor="synopsis">Sinopse</label>
        <textarea id="synopsis" name="synopsis" required />
      </FormSection>

      <FormSection title="Características">
        <FormCheckboxGroupField
          label="Idiomas:"
          options={languages}
          fieldName="languages"
        />

        <FormCheckboxGroupField
          label="Temas:"
          options={themes}
          fieldName="themes"
        />

        <FormSelectField fieldName="franchise" label="Franquia:" options={[]} />
      </FormSection>

      <CreateCharacterInput />

      <fieldset>
        <legend>Sequência</legend>
        <div>
          <label htmlFor="sequel">Continuação:</label>
          <select id="sequel" name="sequel" defaultValue="">
            <option value="" hidden>
              Selecione...
            </option>
            {medias.map(({ slug, title }) => (
              <option key={slug} value={slug}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Arquivos</legend>

        <label htmlFor="cover">Capa (JPEG):</label>
        <input
          type="file"
          id="cover"
          name="cover"
          accept="image/jpeg"
          required
        />

        <label htmlFor="trailer">Trailer (MP4):</label>
        <input type="file" id="trailer" name="trailer" accept="video/mp4" />

        <label htmlFor="gallery">Galeria (JPEG):</label>
        <input
          type="file"
          id="gallery"
          name="gallery"
          accept="image/jpeg"
          multiple
        />
      </fieldset>

      <button type="submit">Enviar</button>
    </form>
  );
}
