import { PenBoxIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  path: string;
  label: string;
};

export function EditButton({ path, label }: Props) {
  return (
    <Link href={path} aria-label={`Editar ${label}.`}>
      <PenBoxIcon />
    </Link>
  );
}
