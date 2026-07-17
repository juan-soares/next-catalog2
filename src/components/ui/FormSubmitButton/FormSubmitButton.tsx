"use client";

type Props = {
  confirmationMessage: string;
  label: string;
};

export function FormSubmitButton({ confirmationMessage, label }: Props) {
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
