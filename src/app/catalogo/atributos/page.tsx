import { getAttributeItemsByType } from "@/modules/attribute-item";
import {
  getAttributeTypeBySlug,
  getAttributeTypes,
} from "@/modules/attribute-type";

import { AttributesPageList } from "@/features/attributes-page/components/AttributesPageList";

type Props = {
  searchParams: Promise<{ type: string }>;
};

export default async function AttributesPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const attributeType = getAttributeTypeBySlug(type);

  if (!attributeType) return <AttributesOverview />;

  return <AttributeTypeList />;
}
