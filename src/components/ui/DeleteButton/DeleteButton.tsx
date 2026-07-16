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

import { ConfirmSubmitButton } from "../ConfirmSubmitButton";

type Props = {
  identifier: string;
  onDelete: (formData: FormData) => Promise<void>;
};

export function DeleteButton({ identifier, onDelete }: Props) {
  return (
    <form action={onDelete}>
      <input type="hidden" name="identifier" value={identifier} />

      <ConfirmSubmitButton
        label="Excluir"
        confirmationMessage="Deseja realmente excluir?"
      />
    </form>
  );
}
