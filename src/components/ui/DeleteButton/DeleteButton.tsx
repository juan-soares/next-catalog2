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
  value: string;
  onDelete: (formData: FormData) => Promise<void>;
};

export function DeleteButton({ value, onDelete }: Props) {
  return (
    <form action={onDelete}>
      <input type="hidden" name="value" value={value} />

      <ConfirmSubmitButton
        label="Excluir"
        confirmationMessage="Deseja realmente excluir?"
      />
    </form>
  );
}
