import { notFound } from "next/navigation";

import { isAdmin } from "@/modules/auth";

import {
  getAttributesByType,
  AttributeList,
  getAttributeTypeBySlug,
} from "@/modules/attribute";

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

  const attributeTypeInfo = getAttributeTypeBySlug(type);

  if (!attributeTypeInfo) {
    notFound();
  }

  const { label, code } = attributeTypeInfo;

  const isUserAdmin = await isAdmin();
  const attributes = await getAttributesByType(code);

  return (
    <div>
      <h1>{label}</h1>

      <AttributeList isAdmin={isUserAdmin} attributes={attributes} />
    </div>
  );
}
