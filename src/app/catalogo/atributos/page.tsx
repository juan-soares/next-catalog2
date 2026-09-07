import { AttributeTypeOverviewCard } from "@/modules/attribute";
import {
  AttributeItemSortOption,
  getAttributeItems,
} from "@/modules1/attribute-item";

type Props = {
  searchParams: Promise<{ sort: string }>;
};

export default async function AttributesPage({ searchParams }: Props) {
  const { sort = "label-asc" } = await searchParams;
  const attributeTypesOverview = await getAttributeTypesOverview();

  return (
    <div>
      <h1>Overview</h1>
      {attributeTypesOverview.map((attributeTypeInfo) => (
        <AttributeTypeOverviewCard
          key={attributeType.code}
          {...attributeTypeInfo}
        />
      ))}
    </div>
  );
}
