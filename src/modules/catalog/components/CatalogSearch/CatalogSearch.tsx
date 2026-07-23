import Link from "next/link";
import { convertCatalogQueryToURLQuery } from "../../helpers";
import { CatalogQuery } from "../../types";

type Props = {
  pathname: string;
  query: CatalogQuery;
};

export function CatalogSearch({ pathname, query }: Props) {
  return (
    <form action={pathname}>
      <input
        name="q"
        type="search"
        placeholder="Pesquisar..."
        defaultValue={query.q}
      />

      <input type="hidden" name="sort" value={query.sort} />

      <button type="submit">Pesquisar</button>
    </form>
  );
}
