import { FormButton } from "@/components/ui";
import type { Attribute } from "@/modules/attribute/types";
import { ATTRIBUTE_TYPES } from "@/modules/attribute/consts";
import { editAttributeAction } from "@/modules/attribute/actions";

type Props = {
  attribute: Attribute;
};

export function AttributeEditForm({ attribute }: Props) {
  const attributeTypeLabel = ATTRIBUTE_TYPES[attribute.type].label;

  return (
    <form action={editAttributeAction}>
      <input type="hidden" name="id" value={attribute.id} />

      <label htmlFor="type">Tipo:</label>
      <input id="type" type="text" value={attributeTypeLabel} disabled />

      <label htmlFor="label">Valor:</label>
      <input id="label" name="label" defaultValue={attribute.label} required />

      <FormButton actionLabel="salvar">Salvar</FormButton>
    </form>
  );
}
