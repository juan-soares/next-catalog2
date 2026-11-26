"use client";

import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import type { ActionResponse } from "@/shared/types";

type Props = {
  initialActionState: ActionResponse;
  deleteAction: (
    prevState: ActionResponse,
    formData: FormData,
  ) => Promise<ActionResponse>;
};

export function useFormDelete({ initialActionState, deleteAction }: Props) {
  const router = useRouter();

  const [isModalDismissed, setIsModalDismissed] = useState(false);

  const [state, formAction, isPending] = useActionState(
    deleteAction,
    initialActionState,
  );

  const isModalOpen = state.status !== "" && !isModalDismissed;

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    const confirmed = window.confirm("Deseja realmente remover?");

    if (!confirmed) {
      event.preventDefault();
    }
  };

  const handleClose = () => {
    setIsModalDismissed(true);

    if (state.status === "success" && state.redirectTo) {
      router.replace(state.redirectTo);
    }
  };

  return {
    formAction,
    handleSubmit,
    isPending,
    isModalOpen,
    state,
    handleClose,
  };
}
