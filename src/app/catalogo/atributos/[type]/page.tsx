import { notFound } from "next/navigation";

import { auth } from "@/modules/auth/configs/next-auth.config";

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

  const session = await auth();
  const attributes = await getAttributesByType(code);

  return (
    <div>
      <h1>{label}</h1>

      <AttributeList isAdmin={session !== null} attributes={attributes} />
    </div>
  );
}
