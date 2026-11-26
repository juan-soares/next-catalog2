"use client";

import { AlertCircleIcon, CheckCircleIcon } from "lucide-react";
import type { ActionResponse } from "@/shared/types";

type Props = {
  status: ActionResponse;
  onClose: () => void;
};

export function FeedbackModal({ status, onClose }: Props) {
  if (status.status === "") return null;

  const isSuccess = status.status === "success";

  return (
    <div>
      {isSuccess ? <CheckCircleIcon /> : <AlertCircleIcon />}
      <h2 id="feedback-title">
        {isSuccess ? "Sucesso!" : "Ops! Algo deu errado."}
      </h2>

      <p>{status.message}</p>

      <button onClick={onClose}>OK</button>
    </div>
  );
}
