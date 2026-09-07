import { AttributeListItem } from "./AttributeList.types";
import { ATTRIBUTES_CATALOG_EDIT_PATH } from "@/consts/paths";
import { DeleteFormButton, EditButton } from "@/components/ui";
import { deleteAttributeAction } from "@/modules/attribute";

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
        {attributes.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>

            {isAdmin && (
              <>
                <EditButton
                  path={ATTRIBUTES_CATALOG_EDIT_PATH + id}
                  label={label}
                />
                <DeleteFormButton
                  deleteAction={deleteAttributeAction}
                  id={id}
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
