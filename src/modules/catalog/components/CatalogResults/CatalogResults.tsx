import Link from "next/link";
import Image from "next/image";
import { CatalogItem } from "../../types";
import { CatalogAdminButtons } from "../CatalogAdminButtons";

type Props = {
  results: CatalogItem[];
  deleteAction: (formData:FormData) => Promise<void>
};

export function CatalogResults({ results, deleteAction }: Props) {
  if (!results.length) {
    return <p>Sem resultados.</p>;
  }

  return (
    <ul>
      {results.map(({ identifier, href, cover, label, releaseYear }) => (
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
      ))}
    </ul>
  );
}
