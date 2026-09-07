import { EditAttributeForm, getAttributeBySlug } from "@/modules/attribute";
import { ATTRIBUTE_TYPES } from "@/modules/attribute/domain";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ attribute: string }>;
};

export default async function EditAttributePage({ params }: Props) {
  const { attribute } = await params;

  const attributeData = await getAttributeBySlug(attribute);

  if (!attributeData) {
    notFound();
  }
  const attributeType = ATTRIBUTE_TYPES[attributeData.type].label;

  return (
    <div>
      <h1>Editar Atributo</h1>
      <EditAttributeForm
        attribute={attributeData}
        attributeType={attributeType}
      />
    </div>
  );
}
