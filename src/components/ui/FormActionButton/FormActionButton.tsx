/**
 * O que este arquivo faz:
 * - Renderiza um botão genérico de exclusão.
 * - Solicita confirmação antes de executar a ação recebida.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece entidades.
 * - Não conhece repositories.
 * - Não contém regras de negócio.
 */

"use client";

import { FormSubmitButton } from "../FormSubmitButton";

type Props = {
  label: string;
  confirmationMessage: string;
  identifier: string;
  action: (formData: FormData) => Promise<void>;
};

export function FormActionButton({
  identifier,
  action,
  label,
  confirmationMessage,
}: Props) {
  return (
    <form action={action}>
      <input type="hidden" name="identifier" value={identifier} />

      <FormSubmitButton
        label={label}
        confirmationMessage={confirmationMessage}
      />
    </form>
  );
}
