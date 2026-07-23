import Link from "next/link";
import { convertCatalogQueryToURLQuery } from "../../helpers";
import { CatalogQuery } from "../../types";
import { CatalogQueryHiddenFields } from "../CatalogQueryHiddenFields";

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

      <CatalogQueryHiddenFields query={query} exclude={["q"]}/>

      <button type="submit">Pesquisar</button>
    </form>
  );
}
