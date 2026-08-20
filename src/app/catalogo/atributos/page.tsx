import { ATTRIBUTES_CATALOG_PATH } from "@/consts/paths";
import { CATALOG_SORT_TYPE } from "@/features/catalog";
import { getAttributeItemsByType } from "@/modules/attribute-item";
import {
  AttributeTypeKey,
  getAttributeTypeBySlug,
} from "@/modules/attribute-type";
import { AdIcon, Delete, Edit } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  searchParams: Promise<{ type: string }>;
};

export default async function AttributesPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const attribute = getAttributeTypeBySlug(type);

  if (!attribute) {
    notFound();
  }

  const attributeItems = await getAttributeItemsByType(
    type as AttributeTypeKey,
  );

  return (
    <div>
      <h1>{attribute.label}</h1>

      <Link href={`${ATTRIBUTES_CATALOG_PATH}/novo?type=${attribute.slug}`}>
        +
      </Link>

      <form>
        <button
          type="submit"
          name="sort"
          value={CATALOG_SORT_TYPE.ALPH}
        ></button>
      </form>

      <ul>
        {attributeItems.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>
            <Link href={"editar"}>
              <Edit />
            </Link>
            <form>
              <button type="submit">
                <Delete />
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
