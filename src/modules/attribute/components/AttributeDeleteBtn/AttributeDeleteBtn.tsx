import { DeleteFormButton } from "@/components/ui";
import { deleteAttributeAction } from "@/modules/attribute/actions";
import { AttributeTypeCode } from "@/modules/attribute/types";

type Props = {
  id: string;
  typeCode: AttributeTypeCode;
};

export function AttributeDeleteBtn({ id, typeCode }: Props) {
  return (
    <DeleteFormButton
      deleteAction={deleteAttributeAction}
      fields={{ id, typeCode }}
    />
  );
}
