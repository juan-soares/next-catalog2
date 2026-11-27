import { MEDIA_CATEGORIES_STRUCTURE_CONSUMED_CONFIG } from "@/modules/media-category-structure/consts";
import { MediaCategoriesStructureCode } from "@/modules/media-category-structure/types";
import type { MediaViewUnit } from "@/modules/media/types";

type Props = {
  units: MediaViewUnit[];
  structure: Extract<
    MediaCategoriesStructureCode,
    "episodic" | "music" | "volume"
  >;
};

export function MediaUnitList({ units, structure }: Props) {
  if (!units.length) {
    return (
      <div>
        <p>Sem registros.</p>
      </div>
    );
  }

  return (
    <ul>
      {units.map(({ id, number, title, status }) => (
        <li key={id}>
          <p>{`${number} - ${title}.`}</p>

          <div>
            <button>{status.acquired ? "Adquirido" : "Adquirir"}</button>
            <button>
              {status.consumed
                ? MEDIA_CATEGORIES_STRUCTURE_CONSUMED_CONFIG[structure].true
                : MEDIA_CATEGORIES_STRUCTURE_CONSUMED_CONFIG[structure].false}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
