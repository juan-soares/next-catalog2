import { Trash2Icon } from "lucide-react";
import { FormButton } from "../FormButton";

type Props = {
  deleteAction: (formData: FormData) => void;
  fields: Record<string, string>;
};

export function DeleteFormButton({ deleteAction, fields }: Props) {
  return (
    <form action={deleteAction}>
      <FormButton actionLabel="remover">
        {Object.entries(fields).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} required />
        ))}
        <Trash2Icon />
      </FormButton>
    </form>
  );
}
