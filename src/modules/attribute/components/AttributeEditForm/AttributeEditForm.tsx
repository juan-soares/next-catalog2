"use client";

import type { ActionState } from "@/shared/types";
import { FormButton } from "@/shared/components/ui";
import type { Attribute } from "@/modules/attribute/types";
import { ATTRIBUTE_TYPES } from "@/modules/attribute/consts";
import { editAttributeAction } from "@/modules/attribute/actions";
import { useActionState } from "react";

type Props = {
  attribute: Attribute;
};

const initialState: ActionState = {
  success: false,
};

export function AttributeEditForm({ attribute }: Props) {
  const [state, formAction] = useActionState(editAttributeAction, initialState);
  const attributeTypeLabel = ATTRIBUTE_TYPES[attribute.type].label;

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={attribute.id} />

      <label htmlFor="type">Tipo:</label>
      <input id="type" type="text" value={attributeTypeLabel} disabled />

      <label htmlFor="label">Valor:</label>
      <input id="label" name="label" defaultValue={attribute.label} required />

      <FormButton actionLabel="salvar">Salvar</FormButton>

      {state.message && <p role="alert">{state.message}</p>}
    </form>
  );
}
