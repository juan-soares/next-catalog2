import { AttributeListItem } from "../../list-attributes.types";
import { EditAttributeBtn } from "@/modules/attribute/features/edit-attribute";
import { DeleteAttributeBtn } from "@/modules/attribute/features/delete-attribute";

type Props = {
  isAdmin: boolean;
  attributes: AttributeListItem[];
};

export function AttributeList({ isAdmin, attributes }: Props) {
  if (!attributes.length)
    return (
      <div>
        <p>Sem itens na lista.</p>
      </div>
    );

  return (
    <div>
      <ul>
        {attributes.map(({ id, label, slug, type }) => (
          <li key={id}>
            <span>{label}</span>

            {isAdmin && (
              <>
                <EditAttributeBtn slug={slug} label={label} />
                <DeleteAttributeBtn identifiers={{ slug, type }} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
