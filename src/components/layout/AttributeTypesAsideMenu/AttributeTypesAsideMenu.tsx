import Link from "next/link";
import { ATTRIBUTES_CATALOG_PATH } from "@/consts/paths";
import { getAttributeTypes } from "../../../modules/attribute-type/services";

export function AttributeTypesAsideMenu() {
  const attributeTypes = getAttributeTypes({ orderBy: "label", order: "asc" });

  return (
    <nav>
      <ul>
        {attributeTypes.map(({ slug, label }) => (
          <li key={slug}>
            <Link href={ATTRIBUTES_CATALOG_PATH + slug}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
