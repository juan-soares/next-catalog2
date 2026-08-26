import { ATTRIBUTE_ITEM_SORT_OPTIONS_LIST } from "@/modules/attribute-item/consts";

export function AttributesPageSortbar() {
  return (
    <form method="GET">
      <label htmlFor="sort">Ordenar por:</label>

      <select id="sort" name="sort" defaultValue="label-asc">
        {ATTRIBUTE_ITEM_SORT_OPTIONS_LIST.map((option) => (
          <option key={option.ORDER} value={option.ORDER}>
            {option.LABEL}
          </option>
        ))}
      </select>

      <button type="submit">Ordenar</button>
    </form>
  );
}
