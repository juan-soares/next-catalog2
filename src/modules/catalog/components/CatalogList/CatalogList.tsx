/**
 * O que este arquivo faz:
 * - Renderiza uma lista de itens do catálogo.
 * - Representa visualmente os resultados do MediaType.
 *
 * O que este arquivo NÃO faz:
 * - Não busca dados.
 * - Não conhece MediaType.
 * - Não interpreta URL.
 * - Não contém regra de negócio.
 */

import Link from "next/link";
import Image from "next/image";

import styles from "./CatalogList.module.css";
import { CatalogResult } from "../../types";
import { DeleteButton } from "@/components/ui";

type Props = {
  deleteAction: (formData: FormData) => Promise<void>;
  result: CatalogResult;
};

export function CatalogList({ deleteAction, result: { items } }: Props) {
  if (items.length === 0) {
    return <p>Sem itens na lista.</p>;
  }

  return (
    <ul className={styles.catalogList}>
      {items.map(({ href, identifier, cover, title, releaseYear }) => (
        <li key={href}>
          <Link href={href}>
            <Image
              src={cover}
              alt={`Capa do título ${title}.`}
              width={60}
              height={60}
            />

            <div>
              <strong>{title}</strong>
              <span>{releaseYear}</span>
            </div>
          </Link>
          <footer>
            <Link href={`/admin/catalogo${href}/editar`}>Editar</Link>
            <DeleteButton identifier={identifier} onDelete={deleteAction} />
          </footer>
        </li>
      ))}
    </ul>
  );
}
