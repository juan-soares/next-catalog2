import { AttributesPageList } from "@/features/attributes-page";
import {
  getAttributeItems,
  getAttributeItemsByType,
} from "@/modules/attribute-item";
import {
  AttributesPageNavbar,
  getAttributeTypeBySlug,
} from "@/modules/attribute-type";

type Props = {
  searchParams: Promise<{ type?: string }>;
};

export default async function AttributesPage({ searchParams }: Props) {
  const { type } = await searchParams;

  const attributeType = type ? getAttributeTypeBySlug(type) : null;

  const title = attributeType?.label ?? "Atributos";

  const attributeItems = attributeType
    ? await getAttributeItemsByType(attributeType.key)
    : await getAttributeItems();

  return (
    <div>
      <aside>
        <AttributesPageNavbar />
      </aside>

      <main>
        <h1>{title}</h1>
        <AttributesPageList
          slug={attributeType?.slug}
          results={attributeItems}
        />
      </main>
    </div>
  );
}
