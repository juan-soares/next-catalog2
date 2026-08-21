import { ATTRIBUTES_CATALOG_NEW_PATH } from "@/consts/paths";
import { getAttributeTypes } from "@/modules/attribute-type";
import Link from "next/link";

export function AttributesPageNavbar() {
  const attributeTypes = getAttributeTypes({ orderBy: "label", order: "asc" });

  return (
    <aside>
      <Link href={ATTRIBUTES_CATALOG_NEW_PATH}>Adicionar Atributo</Link>
      <form method="GET">
        {attributeTypes.map(({ slug, label }) => (
          <button key={slug} type="submit" name="type" value={slug}>
            {label}
          </button>
        ))}
      </form>
    </aside>
  );
}
