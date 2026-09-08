import { notFound } from "next/navigation";
import { AttributeEditForm } from "@/modules/attribute";
import { getAttributeById } from "@/modules/attribute/services";

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
