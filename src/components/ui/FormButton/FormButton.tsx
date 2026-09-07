"use client";

type Props = {
  actionLabel: "salvar" | "editar" | "remover";
  children: React.ReactNode;
};

export function FormButton({ actionLabel, children }: Props) {
  const handleClick = () => {
    const confirm = window.confirm(`Deseja realmente ${actionLabel}?`);
    if (!confirm) return;
  };

  return (
    <button type="submit" onClick={handleClick}>
      {children}
    </button>
  );
}
