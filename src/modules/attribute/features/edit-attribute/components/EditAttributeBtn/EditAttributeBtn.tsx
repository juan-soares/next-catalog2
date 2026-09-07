import { EditButton } from "@/components/ui";
import { ATTRIBUTES_CATALOG_EDIT_PATH } from "@/consts/paths";

type Props = {
  slug: string;
  label: string;
};

export function EditAttributeBtn({ slug, label }: Props) {
  return (
    <EditButton path={ATTRIBUTES_CATALOG_EDIT_PATH + slug} label={label} />
  );
}
