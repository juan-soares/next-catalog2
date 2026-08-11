import Link from "next/link";

type Props = {
  results: [];
};

export function GlobalSearchResults({ results }: Props) {
  return (
    <div>
      {!results.length && <p>Sem resultados.</p>}

      {results.map(({ id, href }) => (
        <li key={id}>
          <Link href={href}></Link>
        </li>
      ))}
    </div>
  );
}
