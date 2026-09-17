import Link from "next/link";

type Props = {
  isAdmin: boolean;
  title: string;
  name: string;
  options: { id: string; label: string }[];
  addHref?: string;
};

export function MediaTypeFilterGroup({
  isAdmin = false,
  title,
  name,
  options,
  addHref,
}: Props) {
  return (
    <div>
      <h3>{title}</h3>

      {options.map(({ id, label }) => (
        <label key={id}>
          <input type="checkbox" name={name} value={id} />
          {label}
        </label>
      ))}

      {isAdmin && addHref && <Link href={addHref}>Adicionar</Link>}
    </div>
  );
}
