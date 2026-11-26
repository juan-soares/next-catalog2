import Link from "next/link";
import { PencilIcon } from "lucide-react";

type Props = {
  url: string;
};

export function FormEditBtn({ url }: Props) {
  return (
    <Link href={`${url}/editar`}>
      <PencilIcon />
    </Link>
  );
}
