import { CatalogFilter } from "../../types";

type Props = {
  filters: CatalogFilter[];
};

export function CatalogFilters({ filters }: Props) {
  return (
    <div>
      {filters.map(({ label, key: name, values }) => (
        <div key={name}>
          <h3>{label}</h3>

          <ul>
            {values.map(({ label, value }) => (
              <li key={value}>
                <input
                  form="catalog-query"
                  type="checkbox"
                  name={name}
                  id={value}
                  value={value}
                />
                <label htmlFor={value}>{label}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
