/**
 * O que este arquivo faz:
 * - Renderiza um botão de submit com confirmação antes do envio do formulário.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece formulários específicos.
 * - Não conhece Server Actions.
 * - Não conhece regras de negócio.
 */

"use client";

type Props = {
  label: string;
  confirmationMessage: string;
};

export function ConfirmSubmitButton({ label, confirmationMessage }: Props) {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const confirmed = window.confirm(confirmationMessage);

    if (!confirmed) {
      event.preventDefault();
    }
  }

  return (
    <button type="submit" onClick={handleClick}>
      {label}
    </button>
  );
}
