import { CatalogFilter } from "../../types";
import { CatalogFilterOption } from "../CatalogFilterOption";

type Props = {
  pathName: string;
  filters: CatalogFilter[];
};

export function CatalogFilters({ filters, pathName }: Props) {
  return (
    <div>
      <h2>Filtros</h2>
      {filters.map(({ key, label, values }) => (
        <div key={key}>
          <h3>{label}</h3>
          <CatalogFilterOption key={key} name={key} values={values} />
        </div>
      ))}

      <footer>
        <form action={pathName}>
          <button type="submit">Limpar filtros</button>
        </form>
      </footer>
    </div>
  );
}
