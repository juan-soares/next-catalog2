import { MediaTypeFilter } from "@/modules/media-type/types";

type Props = {
  filters: MediaTypeFilter[];
};

export async function MediaTypeFilters({ filters }: Props) {
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

      <article>
        <label>Adquirido</label>
        <label>
          <input type="checkbox" name="acquired" value="true" />
          Sim
        </label>
        <label>
          <input type="checkbox" name="acquired" value="false" />
          Não
        </label>
      </article>

      <article>
        <label>Consumido</label>
        <label>
          <input type="checkbox" name="consumed" value="true" />
          Sim
        </label>
        <label>
          <input type="checkbox" name="consumed" value="false" />
          Não
        </label>
      </article>
    </div>
  );
}
