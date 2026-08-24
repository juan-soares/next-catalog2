import { Trash2Icon } from "lucide-react";
import { FormButton } from "../FormButton";

type Props = {
  deleteAction: (formData: FormData) => void;
  id: string;
};

export function DeleteFormButton({ deleteAction, id }: Props) {
  return (
    <form action={deleteAction}>
      <FormButton actionLabel="remover">
        <input type="hidden" name="id" value={id} required />
        <Trash2Icon />
      </FormButton>
    </form>
  );
}
