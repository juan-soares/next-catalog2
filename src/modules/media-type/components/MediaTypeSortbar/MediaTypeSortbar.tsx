import { MEDIA_TYPE_SORT_OPTIONS } from "@/modules/media-type/consts";

export function MediaTypeSortbar() {
  return (
    <div>
      <label htmlFor="sort">Ordenar por</label>

      <select
        id="sort"
        form="media-type-filters"
        name="sort"
        defaultValue="title:asc"
      >
        {MEDIA_TYPE_SORT_OPTIONS.map(({ label, field, direction }) => (
          <option key={`${field}-${direction}`} value={`${field}:${direction}`}>
            {label}
          </option>
        ))}
      </select>

      <button form="media-type-filters" type="submit">
        Ordenar
      </button>
    </div>
  );
}
