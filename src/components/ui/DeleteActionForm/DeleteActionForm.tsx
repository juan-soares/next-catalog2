import { SubmitActionButton } from "../SubmitActionButton";

type Props = {
  fieldName: string;
  fieldValue: string;
  deleteAction: (formData: FormData) => Promise<void>;
};

export function DeleteActionForm({ fieldName, fieldValue ,deleteAction }: Props) {
  return (
    <form action={deleteAction}>
      <input type="hidden" name={fieldName} value={fieldValue} hidden />
      <SubmitActionButton
        label="Deletar"
        confirmationMessage="Deseja realmente excluir?"
      />
    </form>
  );
}
