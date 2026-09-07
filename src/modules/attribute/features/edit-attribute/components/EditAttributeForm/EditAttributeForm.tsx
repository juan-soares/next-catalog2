import { FormButton } from "@/components/ui";
import { type Attribute } from "@/modules/attribute/domain";
import { editAttributeAction } from "../../edit-attribute.action";

type Props = {
  attribute: Attribute;
  attributeType: string;
};

export function EditAttributeForm({ attribute, attributeType }: Props) {
  return (
    <form action={editAttributeAction}>
      <input type="hidden" name="slug" value={attribute.slug} />
      <input type="hidden" name="type" value={attribute.type} />

      <label htmlFor="type">Tipo:</label>
      <input id="type" type="text" value={attributeType} disabled />

      <label htmlFor="label">Valor:</label>
      <input id="label" name="label" defaultValue={attribute.label} required />

      <FormButton actionLabel="salvar">Salvar</FormButton>
    </form>
  );
}
