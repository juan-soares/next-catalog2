type Props = {
  pathName: string;
};

export function CatalogFilters({ pathName }: Props) {
  return (
    <div>
      <footer>
        <form action={pathName}>
          <button type="submit">Limpar filtros</button>
        </form>
      </footer>
    </div>
  );
}
