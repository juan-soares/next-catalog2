import Link from "next/link";
import { PenBoxIcon } from "lucide-react";
import { ATTRIBUTES_CATALOG_EDIT_PATH } from "@/consts/paths";
import {
  AttributeItem,
  deleteAttributeItemAction,
} from "@/modules/attribute-item";

import { AttributesPageSortbar } from "./AttributesPageSortbar";
import { DeleteFormButton } from "@/components/ui/DeleteFormButton";

type Props = {
  slug?: string;
  results: AttributeItem[];
};

export function AttributesPageList({ slug, results }: Props) {
  if (!results.length) {
    return (
      <div>
        <p>Sem resultados</p>
      </div>
    );
  }

  return (
    <div>
      <AttributesPageSortbar slug={slug} />
      <ul>
        {results.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>
            <div>
              <Link href={ATTRIBUTES_CATALOG_EDIT_PATH + id}>
                <PenBoxIcon />
              </Link>
            </div>

            <div>
              <DeleteFormButton
                deleteAction={deleteAttributeItemAction}
                id={id}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
