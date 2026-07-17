import Link from "next/link";
import { CatalogAdminButtons } from "../CatalogAdminButtons";
import Image from "next/image";

type Props = {
  identifier: string;
  href: string;
  cover: string;
  label: string;
  releaseYear: number;
  deleteAction: (formData: FormData) => Promise<void>;
};

export function CatalogCard({
  identifier,
  href,
  cover,
  label,
  releaseYear,
  deleteAction,
}: Props) {
  return (
    <li key={identifier}>
      <Link href={href}>
        <Image
          src={cover}
          alt={`Capa do título ${label}.`}
          width={60}
          height={60}
        />
        <div>
          <strong>{label}</strong>
          <p>{releaseYear}</p>
        </div>
      </Link>

      <CatalogAdminButtons
        identifier={identifier}
        deleteAction={deleteAction}
      />
    </li>
  );
}
