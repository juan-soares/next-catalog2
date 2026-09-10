import Link from "next/link";
import {
  CATALOG_ATTRIBUTES_NEW_PATH,
  CATALOG_ATTRIBUTES_PATH,
} from "@/shared/consts/paths.const";
import { ATTRIBUTE_TYPES_LIST } from "@/modules/attribute/consts";

export function AttributeTypesNavbar() {
  return (
    <nav>
      <Link href={CATALOG_ATTRIBUTES_NEW_PATH}>Adicionar Atributo</Link>
      {ATTRIBUTE_TYPES_LIST.map(({ code, label, slug }) => (
        <Link key={code} href={CATALOG_ATTRIBUTES_PATH + slug}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
