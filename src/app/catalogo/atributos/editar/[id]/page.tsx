import { notFound } from "next/navigation";
import { AttributeEditForm, getAttributeById } from "@/modules/attribute";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditAttributePage({ params }: Props) {
  const { id } = await params;

  const attribute = await getAttributeById(id);

  if (!attribute) {
    notFound();
  }

  return (
    <div>
      <h1>Editar Atributo</h1>
      <AttributeEditForm attribute={attribute} />
    </div>
  );
}
