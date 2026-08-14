type Props = {
  term?: string;
};

export function CatalogSearch({ term }: Props) {
  return (
    <input
      form="catalog-query"
      name="q"
      type="search"
      placeholder="Pesquisar..."
      defaultValue={term}
    />
  );
}
