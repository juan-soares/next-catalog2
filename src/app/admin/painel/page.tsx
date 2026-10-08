import Link from "next/link";
import { Edit, Edit2Icon, Edit3Icon, PencilLine } from "lucide-react";
import { listAttributes } from "@/modules/attribute";
import { ADMIN_ATTRIBUTES_EDIT_PATH } from "@/shared/consts";
import { DeleteFormButton, EditButton } from "@/shared/components/ui";
import { ATTRIBUTE_TYPES_REGISTRY } from "@/modules/attribute/consts";
import { deleteAttributeAction } from "@/modules/attribute/actions";

export default async function AdminPanelPage() {
  const attributes = await listAttributes();

  return (
    <div>
      <h1>Painel de Usuário</h1>

      <div>
        <h2>Atributos</h2>
        <ul>
          {attributes.map(({ id, label, type }) => (
            <li key={id}>
              ({ATTRIBUTE_TYPES_REGISTRY[type].label}) {label}
              <EditButton
                path={`${ADMIN_ATTRIBUTES_EDIT_PATH}/${id}`}
                label="atributos"
              />
              <DeleteFormButton
                deleteAction={deleteAttributeAction}
                fields={{ id, typeCode: type }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
