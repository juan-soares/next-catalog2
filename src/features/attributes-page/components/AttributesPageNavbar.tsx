import {
  ATTRIBUTES_CATALOG_NEW_PATH,
  ATTRIBUTES_CATALOG_PATH,
} from "@/consts/paths";
import { getAttributeTypes } from "@/modules/attribute-type";
import Link from "next/link";

export function AttributesPageNavbar() {
  const attributeTypes = getAttributeTypes({ orderBy: "label", order: "asc" });

  return (
    <nav>
      <h1>Atributos</h1>

      <Link href={ATTRIBUTES_CATALOG_NEW_PATH}>Novo</Link>
      <Link href={ATTRIBUTES_CATALOG_PATH}>Todos</Link>

      {attributeTypes.map(({ key, label, slug }) => (
        <Link key={key} href={ATTRIBUTES_CATALOG_PATH + slug}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
