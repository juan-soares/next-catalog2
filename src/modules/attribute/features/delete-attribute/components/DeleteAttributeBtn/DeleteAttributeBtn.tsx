import { DeleteFormButton } from "@/components/ui";
import { deleteAttributeAction } from "../../delete-attribute.actions";
import { DeleteAttributeIdentifiers } from "../../delete-attribute.types";

type Props = {
  identifiers: DeleteAttributeIdentifiers;
};

export function DeleteAttributeBtn({ identifiers }: Props) {
  return (
    <DeleteFormButton
      deleteAction={deleteAttributeAction}
      fields={identifiers}
    />
  );
}
