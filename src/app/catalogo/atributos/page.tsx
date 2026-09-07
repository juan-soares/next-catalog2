import {
  AttributeItemSortOption,
  getAttributeItems,
} from "@/modules1/attribute-item";

type Props = {
  searchParams: Promise<{ sort: string }>;
};

export default async function AttributesPage({ searchParams }: Props) {
  const { sort = "label-asc" } = await searchParams;

  return (
    <div>
      <h1>Todos Atributos</h1>
    </div>
  );
}
