import { MEDIA_SORT_OPTION_LIST } from "@/modules/media/consts";
import { MediaSortOptionKey } from "@/modules/media/types";

type Props = {
  currentSort: MediaSortOptionKey;
};

export function MediasSortbar({ currentSort }: Props) {
  return (
    <form>
      <label htmlFor="sort">Ordenar:</label>
      <select id="sort" name="sort" defaultValue={currentSort}>
        {MEDIA_SORT_OPTION_LIST.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      <button type="submit">OK</button>
    </form>
  );
}
