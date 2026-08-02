import { SubmitActionButton } from "../SubmitActionButton";

type Props = {
  fieldName: string;
  fieldValue: string;
  itemType: string;
  deleteAction: (formData: FormData) => Promise<void>;
};

export function DeleteActionForm({
  fieldName,
  fieldValue,
  itemType,
  deleteAction,
}: Props) {
  return (
    <form action={deleteAction}>
      <input type="hidden" name={fieldName} value={fieldValue} hidden />
      <input type="hidden" name="itemType" value={itemType} hidden />
      <SubmitActionButton
        label="Deletar"
        confirmationMessage="Deseja realmente excluir?"
      />
    </form>
  );
}
