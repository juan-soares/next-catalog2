import { MediaTypeCode } from "@/modules/media-type/types";
import { getFiltersByMediaType } from "@/modules/media-type/services";

type Props = {
  typeCode: MediaTypeCode;
};

export function MediaTypeFilters({ typeCode }: Props) {
  const filters = getFiltersByMediaType(typeCode);

  return (
    <div>
      <h2>Filtros</h2>

      {filters.map(({ field, label, options }) => (
        <article key={field}>
          <h3>{label}</h3>

          {options.map((option) => (
            <label key={option.id}>
              <input type="checkbox" name={field} value={option.id} />
              {option.label}
            </label>
          ))}
        </article>
      ))}
    </div>
  );
}
