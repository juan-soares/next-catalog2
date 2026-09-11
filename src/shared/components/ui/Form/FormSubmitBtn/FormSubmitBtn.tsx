"use client";

import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";

export function FormSubmitBtn() {
  const { pending } = useFormStatus();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const confirm = window.confirm("Deseja realmente salvar?");
    if (!confirm) {
      event.preventDefault();
    }
  };

  return (
    <button type="submit" onClick={handleClick} disabled={pending}>
      {pending ? <Loader /> : "Salvar"}
    </button>
  );
}
