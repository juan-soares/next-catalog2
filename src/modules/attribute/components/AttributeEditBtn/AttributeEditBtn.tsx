import { EditButton } from "@/components/ui";
import { CATALOG_ATTRIBUTES_EDIT_PATH } from "@/consts/paths";

type Props = {
  id: string;
};

export function AttributeEditBtn({ id }: Props) {
  return (
    <EditButton path={CATALOG_ATTRIBUTES_EDIT_PATH + id} label="atributo" />
  );
}
