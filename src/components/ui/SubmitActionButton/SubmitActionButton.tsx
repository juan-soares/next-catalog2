"use client";

type Props = {
  label: string;
  confirmationMessage: string;
};

export function SubmitActionButton({ label, confirmationMessage }: Props) {
  const handleClick = () => {
    const confirm = window.confirm(confirmationMessage);
    if (!confirm) return;
  };

  return (
    <button type="submit" onClick={handleClick}>
      {label}
    </button>
  );
}
