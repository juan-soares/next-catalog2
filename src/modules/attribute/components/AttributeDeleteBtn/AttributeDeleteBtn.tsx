"use client";

import { DeleteFormButton } from "@/shared/components/ui";
import { deleteAttributeAction } from "@/modules/attribute/actions";
import type { AttributeTypeCode } from "@/modules/attribute/types";

type Props = {
  id: string;
  typeCode: AttributeTypeCode;
};

export function AttributeDeleteBtn({ id, typeCode }: Props) {
  return (
    <DeleteFormButton
      deleteAction={deleteAttributeAction}
      fields={{ id, type: typeCode }}
    />
  );
}
