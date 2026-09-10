import { EditButton } from "@/shared/components/ui";
import { CATALOG_ATTRIBUTES_EDIT_PATH } from "@/shared/consts/paths.const";

type Props = {
  id: string;
};

export function AttributeEditBtn({ id }: Props) {
  return (
    <EditButton path={CATALOG_ATTRIBUTES_EDIT_PATH + id} label="atributo" />
  );
}
