import { AttributesPageList } from "@/features/attributes-page";
import { auth } from "@/features/auth/next-auth/auth";
import {
  AttributeItemSortOption,
  getAttributeItems,
} from "@/modules/attribute-item";

type Props = {
  searchParams: Promise<{ sort: string }>;
};

export default async function AttributesPage({ searchParams }: Props) {
  const { sort = "label-asc" } = await searchParams;
  const results = await getAttributeItems(sort as AttributeItemSortOption);
  const session = await auth();

  return (
    <div>
      <h1>Todos Atributos</h1>
      <AttributesPageList hasUser={session !== null} results={results} />
    </div>
  );
}
