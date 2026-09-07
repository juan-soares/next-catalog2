import { notFound } from "next/navigation";

import { auth } from "@/features/auth/next-auth/auth";

import { listAttributesByType, AttributeList } from "@/modules/attribute";

import { getAttributeTypeBySlug } from "@/modules1/attribute-type";

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

  const session = await auth();
  const attributes = await listAttributesByType(key);

  return (
    <div>
      <h1>{label}</h1>

      <AttributeList isAdmin={session !== null} attributes={attributes} />
    </div>
  );
}
