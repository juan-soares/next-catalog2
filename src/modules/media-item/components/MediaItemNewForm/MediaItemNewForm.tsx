import { ReactNode } from "react";
import { SubmitActionButton } from "@/components/ui";
import { createMediaItemAction } from "../../actions";
import { MediaItemCharacterFields } from "../MediaItemDetailsPage/MediaItemCharacterFields";
import { getMediaTypeConfigBySlug, MediaTypeKey } from "@/modules/media-type";

type Props = {
  mediaType: MediaTypeKey;
  children?: ReactNode;
};

export async function MediaItemForm({ mediaType, children }: Props) {
  const mediaTypeConfig = getMediaTypeConfigBySlug(mediaType);
  const attributes = await mediaTypeConfig.catalog.getFilters();

  return (
    <form action={createMediaItemAction}>
      <input type="hidden" name="mediaType" value={mediaType} />

      <fieldset>
        <legend>Ficha Técnica</legend>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input type="text" id="translatedTitle" name="translatedTitle" />

        <label htmlFor="releaseDate">Lançamento:</label>
        <input type="date" id="releaseDate" name="releaseDate" required />

        <label htmlFor="synopsis">Sinopse:</label>
        <textarea id="synopsis" name="synopsis" required />
      </fieldset>

      {attributes.map(({ label, values }) => (
        <fieldset key={label}>
          <legend>{label}</legend>
          {values.map(({ type, value, label }, index) => (
            <label key={value}>
              <input type="checkbox" name={type} value={value+index} />
              {label}
            </label>
          ))}
        </fieldset>
      ))}

      <fieldset>
        <legend>Franquias</legend>
        <label>
          <input type="checkbox" name="franchises" value="FRANCHISE_ID_AQUI" />
          Marvel
        </label>
      </fieldset>

      <fieldset>
        <legend>Personagens</legend>
        <MediaItemCharacterFields />
      </fieldset>

      <fieldset>
        <legend>Arquivos</legend>

        <label htmlFor="cover">Capa:</label>

        <input type="text" id="cover" name="cover" required />

        <label htmlFor="trailer">Trailer:</label>

        <input type="text" id="trailer" name="trailer" required />
      </fieldset>

      <fieldset>
        <legend>Controle</legend>

        <label>Adquirido:</label>

        <label htmlFor="acquired">Sim</label>

        <input type="radio" id="acquired" name="acquired" value="true" />

        <label htmlFor="notAcquired">Não</label>

        <input
          type="radio"
          id="notAcquired"
          name="acquired"
          value="false"
          defaultChecked
        />
      </fieldset>

      <fieldset>
        <legend>Status</legend>

        <label>Completo:</label>

        <label htmlFor="complete">Sim</label>

        <input type="radio" id="complete" name="complete" value="true" />

        <label htmlFor="notComplete">Não</label>

        <input
          type="radio"
          id="notComplete"
          name="complete"
          value="false"
          defaultChecked
        />
      </fieldset>

      {children}

      <SubmitActionButton
        label="Salvar"
        confirmationMessage="Deseja realmente salvar?"
      />
    </form>
  );
}
