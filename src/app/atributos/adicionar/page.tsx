import { CreateAttributeForm } from "@/modules/attribute/components";
import { getAttributeTypeByCode } from "@/modules/attribute/services";

type Props = {
  searchParams: Promise<{ type: string }>;
};

export default async function CreateAttributePage({ searchParams }: Props) {
  const { type } = await searchParams;

  const attributeType = getAttributeTypeByCode(type);

  return (
    <div>
      <h1>Adicionar Atributo</h1>

      <CreateAttributeForm attributeType={attributeType} />
    </div>
  );
}
