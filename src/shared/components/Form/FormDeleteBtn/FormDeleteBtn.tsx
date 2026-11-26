"use client";

import { Trash2Icon } from "lucide-react";
import type { ActionResponse } from "@/shared/types";
import { FeedbackModal } from "@/shared/components";
import { useFormDelete } from "./FormDeleteBtn.hooks";

type Props = {
  id: string;
  deleteAction: (
    prevState: ActionResponse,
    formData: FormData,
  ) => Promise<ActionResponse>;
};

const initialActionState: ActionResponse = {
  status: "",
};

export function FormDeleteBtn({ id, deleteAction }: Props) {
  const {
    formAction,
    handleSubmit,
    isPending,
    isModalOpen,
    state,
    handleClose,
  } = useFormDelete({
    initialActionState,
    deleteAction,
  });

  return (
    <>
      <form action={formAction} onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <button type="submit" disabled={isPending}>
          <Trash2Icon />
        </button>
      </form>

      {isModalOpen && <FeedbackModal status={state} onClose={handleClose} />}
    </>
  );
}
