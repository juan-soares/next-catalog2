import { CatalogFilter } from "../../types";

type Props = {
  filters: CatalogFilter[];
};

export function CatalogFilters({ filters }: Props) {
  return (
    <form>
      <h2>Filtros</h2>

      {filters.map(({ label, fieldName, options }) => (
        <article key={fieldName}>
          <h3>{label}</h3>
          {options.map(({ value, label }) => (
            <label key={value}>
              <input type="checkbox" name={fieldName} value={value} />
              {label}
            </label>
          ))}
        </article>
      ))}

      <button type="submit">Filtrar</button>
    </form>
  );
}
