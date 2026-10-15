import { MEDIA_SORT_OPTION_LIST } from "@/modules/media/consts";
import { MediaSortOptionKey } from "@/modules/media/types";

type Props = {
  currentSort: MediaSortOptionKey;
};

export function MediasSortbar({ currentSort }: Props) {
  return (
    <div>
      <label htmlFor="sort">Ordenar:</label>
      <select id="sort" name="sort" form="search" defaultValue={currentSort}>
        {MEDIA_SORT_OPTION_LIST.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      <button form="search" type="submit">
        OK
      </button>
    </div>
  );
}
