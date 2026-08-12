import { ReactNode } from "react";
import { SubmitActionButton } from "@/components/ui";
import { createMediaItemAction } from "../../actions";
import { MediaItemCharacterFields } from "../MediaItemDetailsPage/MediaItemCharacterFields";
import { MediaTypeKey } from "@/modules/media-type";
import { getAttributesByType } from "@/modules/attribute";
import { AttributeCheckboxField } from "./AttributeCheckboxField.tsx";

type Props = {
  mediaType: MediaTypeKey;
  children?: ReactNode;
};

export async function MediaItemForm({ mediaType, children }: Props) {
  const [languageOptions, themeOptions] = await Promise.all([
    getAttributesByType("languages"),
    getAttributesByType("themes"),
  ]);

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

        <AttributeCheckboxField
          fieldName="languageIds"
          label="Idiomas"
          options={languageOptions}
        />

        <label htmlFor="synopsis">Sinopse:</label>
        <textarea id="synopsis" name="synopsis" required />
      </fieldset>

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
