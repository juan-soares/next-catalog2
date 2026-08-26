import Link from "next/link";
import { PenBoxIcon } from "lucide-react";
import { ATTRIBUTES_CATALOG_EDIT_PATH } from "@/consts/paths";
import {
  AttributeItem,
  deleteAttributeItemAction,
} from "@/modules/attribute-item";

import { AttributesPageSortbar } from "./AttributesPageSortbar";
import { DeleteFormButton } from "@/components/ui/DeleteFormButton";
import { ATTRIBUTE_TYPES } from "@/modules/attribute-type";

type Props = {
  hasUser: boolean;
  results: AttributeItem[];
};

export function AttributesPageList({ hasUser, results }: Props) {
  if (!results.length) {
    return (
      <div>
        <p>Sem resultados</p>
      </div>
    );
  }

  return (
    <div>
      <AttributesPageSortbar />

      <table>
        <thead>
          <tr>
            <th scope="col">Atributo</th>
            <th scope="col">Tipo</th>
            {hasUser && <th scope="col">Ações</th>}
          </tr>
        </thead>

        <tbody>
          {results.map(({ id, label, attributeType }) => (
            <tr key={id}>
              <td>{label}</td>

              <td>{ATTRIBUTE_TYPES[attributeType].label}</td>

              {hasUser && (
                <td>
                  <Link href={ATTRIBUTES_CATALOG_EDIT_PATH + id}>
                    <PenBoxIcon />
                  </Link>

                  <DeleteFormButton
                    deleteAction={deleteAttributeItemAction}
                    id={id}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
