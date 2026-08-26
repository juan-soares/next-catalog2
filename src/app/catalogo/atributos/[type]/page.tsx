import { AttributesPageList } from "@/features/attributes-page";
import { auth } from "@/features/auth/next-auth/auth";
import {
  getAttributeItems,
  getAttributeItemsByType,
} from "@/modules/attribute-item";
import {
  AttributeTypeKey,
  getAttributeTypeBySlug,
} from "@/modules/attribute-type";
import { notFound } from "next/navigation";

type Props = {
  searchParams: Promise<{
    type: string;
    sortOrder: "label-asc" | "label-desc";
  }>;
};

export default async function AttributeTypePage({ searchParams }: Props) {
  const { type, sortOrder = "label-asc" } = await searchParams;

  const attributeType = getAttributeTypeBySlug(type);
  if (!attributeType) {
    notFound();
  }

  const { label } = attributeType;

  const results = await getAttributeItemsByType(
    sortOrder,
    type as AttributeTypeKey,
  );
  const session = await auth();

  return (
    <div>
      <h1>{label}</h1>
      <AttributesPageList hasUser={session !== null} results={results} />
    </div>
  );
}
