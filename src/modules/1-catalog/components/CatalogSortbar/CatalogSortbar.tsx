import { SORT_OPTIONS } from "../../consts";
import { CatalogQuery, CatalogSortOptions } from "../../types";

type Props = {
  currentSort: CatalogSortOptions;
};

export function CatalogSortbar({ currentSort }: Props) {
  return (
    <fieldset>
      <legend>Ordenar por</legend>

      {SORT_OPTIONS.map((option) => (
        <label key={option.value}>
          <input
            form="catalog-query"
            type="radio"
            name="sort"
            value={option.value}
            defaultChecked={currentSort === option.value}
          />

          {option.label}
        </label>
      ))}
    </fieldset>
  );
}
