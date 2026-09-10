"use client";

import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";

type Props = {
  actionLabel: "salvar" | "editar" | "remover";
  children: React.ReactNode;
};

export function FormButton({ actionLabel, children }: Props) {
  const { pending } = useFormStatus();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const confirm = window.confirm(`Deseja realmente ${actionLabel}?`);
    if (!confirm) {
      event.preventDefault();
    }
  };

  return (
    <button type="submit" onClick={handleClick} disabled={pending}>
      {pending ? <Loader /> : children}
    </button>
  );
}
