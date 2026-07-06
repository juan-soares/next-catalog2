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
import { CatalogItem } from "@/modules/media-type";

type Props = {
  items: CatalogItem[];
};

export function CatalogList({ items }: Props) {
  if (items.length === 0) {
    return <p>Sem itens na lista.</p>;
  }

  return (
    <ul className={styles.catalogList}>
      {items.map(({ href, cover, title, releaseYear }) => (
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
        </li>
      ))}
    </ul>
  );
}
