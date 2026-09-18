"use client";

import { useActionState } from "react";
import type { ActionState } from "@/shared/types";
import { FormSubmitBtn } from "@/shared/components/ui";
import { createMediaAction } from "@/modules/media/actions";
import { MediaTypeCode } from "@/modules/media-type";

type Props = {
  type: MediaTypeCode;
};

const initialActionState: ActionState = {
  success: false,
};

export function NewMediaForm({ type }: Props) {
  const [state, formAction] = useActionState(
    createMediaAction,
    initialActionState,
  );

  return (
    <form action={formAction}>
      <input type="hidden" name="type" value={type} />
      <fieldset>
        <legend>Ficha Técnica</legend>
        <label htmlFor="title">Título: </label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="translatedTitle">Título Traduzido: </label>
        <input type="text" id="translatedTitle" name="translatedTitle" />

        <label htmlFor="releaseDate">Lançamento: </label>
        <input type="date" id="releaseDate" name="releaseDate" required />
      </fieldset>

      <fieldset>
        <legend>Mídias</legend>
        <label htmlFor="cover">Capa: </label>
        <input type="file" id="cover" name="cover" accept=".png" required />

        <label htmlFor="trailer">Trailer: </label>
        <input type="file" id="trailer" name="trailer" />
      </fieldset>

      <fieldset>
        <legend>Tags</legend>
        <label htmlFor="themeIds">Temas: </label>
        <label>
          <input type="checkbox" name="themeIds" value={1} />1
        </label>

        <label htmlFor="franchiseId">Franquia: </label>
        <select id="franchiseId" name="franchiseId" required>
          <option value="" hidden>
            Selecione...
          </option>

          <option value="none">Outros</option>
        </select>
      </fieldset>

      <FormSubmitBtn />
    </form>
  );
}
