"use client";

import { useActionState } from "react";
import { Loader, Trash2Icon } from "lucide-react";
import { useFormStatus } from "react-dom";
import type { ActionState } from "@/shared/types";

type Props = {
  deleteAction: (
    previousState: ActionState,
    formData: FormData,
  ) => Promise<ActionState>;
  fields: Record<string, string>;
};

const initialState: ActionState = {
  success: false,
};

function DeleteButton() {
  const { pending } = useFormStatus();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const confirmed = window.confirm("Deseja realmente remover?");

    if (!confirmed) {
      event.preventDefault();
    }
  };

  return (
    <button type="submit" onClick={handleClick} disabled={pending}>
      {pending ? <Loader /> : <Trash2Icon />}
    </button>
  );
}

export function DeleteFormButton({ deleteAction, fields }: Props) {
  const [state, formAction] = useActionState(deleteAction, initialState);

  return (
    <>
      <form action={formAction}>
        {Object.entries(fields).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} required />
        ))}

        <DeleteButton />
      </form>

      {state.message && <p role="alert">{state.message}</p>}
    </>
  );
}
