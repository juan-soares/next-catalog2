import { AttributesPageList } from "@/features/attributes-page";
import { auth } from "@/features/auth/next-auth/auth";
import { getAttributeItems } from "@/modules/attribute-item";

type Props = {
  searchParams: Promise<{ sortOrder: "label-asc" | "label-desc" }>;
};

export default async function AttributesPage({ searchParams }: Props) {
  const { sortOrder = "label-asc" } = await searchParams;
  const results = await getAttributeItems({ sortOrder });
  const session = await auth();

  return (
    <div>
      <h1>Todos Atributos</h1>
      <AttributesPageList hasUser={session !== null} results={results} />
    </div>
  );
}
