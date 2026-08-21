import { ATTRIBUTES_CATALOG_EDIT_PATH } from "@/consts/paths";
import { AttributeItem } from "@/modules/attribute-item";
import { Delete, Edit } from "lucide-react";
import Link from "next/link";

type Props = {
  results: AttributeItem[];
};

export function AttributesPageList({ results }: Props) {
  if (!results.length) {
    return (
      <div>
        <p>Sem resultados</p>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {results.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>
            <div>
              <Link href={ATTRIBUTES_CATALOG_EDIT_PATH + id}>
                <Edit />
              </Link>
            </div>

            <div>
              <form>
                <button type="submit">
                  <Delete />
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
