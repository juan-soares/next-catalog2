import { Attribute } from "@/modules/attribute";
import { createMediaAction } from "@/modules/media/actions";
import { MediaDetails } from "@/modules/media/types";

type Props = {
  attributes: Attribute[];
  medias: MediaDetails[];
  franchises: [];
};

export function CreateMediaForm({ attributes, medias, franchises }: Props) {
  const languages = attributes.filter(({ type }) => type.field === "languages");
  const themes = attributes.filter(({ type }) => type.field === "themes");

  return (
    <form action={createMediaAction}>
      <fieldset>
        <legend>Informações Gerais</legend>

        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input type="text" id="translatedTitle" name="translatedTitle" />

        <label htmlFor="releaseDate">Data de Lançamento:</label>
        <input type="date" id="releaseDate" name="releaseDate" required />

        <label htmlFor="synopsis">Sinopse</label>
        <textarea id="synopsis" name="synopsis" required />
      </fieldset>

      <fieldset>
        <legend>Características</legend>

        <div>
          <label>Idiomas:</label>
          {languages.map(({ id, label }) => (
            <label key={id}>
              <input type="checkbox" value={id} name="languages" />
              {label}
            </label>
          ))}
        </div>

        <div>
          <label>Temas:</label>
          {themes.map(({ id, label }) => (
            <label key={id}>
              <input type="checkbox" value={id} name="themes" />
              {label}
            </label>
          ))}
        </div>

        <div>
          <label htmlFor="franchise">Franquia:</label>
          <select id="franchise" name="franchise" defaultValue="" required>
            <option value="" hidden>
              Selecione...
            </option>
            {franchises.map(({ id, title }) => (
              <option key={id} value={id}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

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

        <label htmlFor="files">Selecionar arquivos:</label>
        <input type="file" id="files" name="files" multiple />
      </fieldset>

      <button type="submit">Enviar</button>
    </form>
  );
}
