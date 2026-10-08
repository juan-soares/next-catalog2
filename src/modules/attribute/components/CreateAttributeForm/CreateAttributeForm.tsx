"use client";

import { useActionState } from "react";
import type { ActionState } from "@/shared/types";
import { SubmitFormButton } from "@/shared/components/ui";
import { createAttributeAction } from "@/modules/attribute/actions";
import { ATTRIBUTE_TYPES_LIST } from "@/modules/attribute/consts";

const initialState: ActionState = {
  success: false,
};

export function CreateAttributeForm() {
  const [state, formAction] = useActionState(
    createAttributeAction,
    initialState,
  );

  return (
    <form action={formAction}>
      <label htmlFor="type">Tipo:</label>
      <select id="type" name="type" defaultValue="" required>
        <option value="" hidden>
          Selecione...
        </option>

        {ATTRIBUTE_TYPES_LIST.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>

      <label htmlFor="label">Valor:</label>
      <input id="label" name="label" required />

      <SubmitFormButton />
      {state.message && <p role="alert">{state.message}</p>}
    </form>
  );
}
