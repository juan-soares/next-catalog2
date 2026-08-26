import { notFound } from "next/navigation";
import { auth } from "@/features/auth/next-auth/auth";
import { AttributesPageList } from "@/features/attributes-page";
import {
  AttributeItemSortOption,
  getAttributeItemsByType,
} from "@/modules/attribute-item";
import { getAttributeTypeBySlug } from "@/modules/attribute-type";

type Props = {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ sort: string }>;
};

export default async function AttributeTypePage({
  params,
  searchParams,
}: Props) {
  const { type } = await params;
  const { sort = "label-asc" } = await searchParams;

  const attributeType = getAttributeTypeBySlug(type);
  if (!attributeType) {
    notFound();
  }

  const { label, key } = attributeType;

  const results = await getAttributeItemsByType(
    sort as AttributeItemSortOption,
    key,
  );
  const session = await auth();

  return (
    <div>
      <h1>{label}</h1>
      <AttributesPageList hasUser={session !== null} results={results} />
    </div>
  );
}
