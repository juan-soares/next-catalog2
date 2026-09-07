import {
  AttributeItemForm,
  createAttributeItemAction,
} from "@/modules1/attribute-item";

export default function NewAttributeItemPage() {
  return (
    <div>
      <h2>Novo Atributo</h2>
      <AttributeItemForm action={createAttributeItemAction} />
    </div>
  );
}
