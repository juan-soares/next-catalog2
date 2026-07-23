import { CatalogQuery } from "../../types";

type Props = {
  query: CatalogQuery;
  exclude?: (keyof CatalogQuery)[];
};

export function CatalogQueryHiddenFields({ query, exclude = [] }: Props) {
  return (
    <>
      {Object.entries(query)
        .filter(([key]) => !exclude.includes(key as keyof CatalogQuery))
        .map(([key, value]) => {
          if (value === undefined) return null;

          return (
            <input key={key} type="hidden" name={key} value={String(value)} />
          );
        })}
    </>
  );
}
