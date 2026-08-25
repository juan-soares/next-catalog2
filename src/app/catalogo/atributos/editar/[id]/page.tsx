import {
  AttributeItemForm,
  editAttributeItemAction,
} from "@/modules/attribute-item";
import { getAttributeItemById } from "@/modules/attribute-item/services/get-attribute-item-by-id.service";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditAttributeItemPage({ params }: Props) {
  const { id } = await params;

  const attribute = await getAttributeItemById(id);

  if (!attribute) {
    notFound();
  }

  return (
    <div>
      <h1>Editar Atributo</h1>

      <AttributeItemForm
        action={editAttributeItemAction}
        initialData={attribute}
      />
    </div>
  );
}
