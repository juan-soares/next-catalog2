import { MediaCard } from "@/modules/media/components";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "gameExpansions">;

export function MediaTabGameExpansions({ gameExpansions }: Props) {
  if (!gameExpansions) return;

  const { base, expansions, dlcs } = gameExpansions;

  return (
    <section>
      <h2>Expansões</h2>

      {base && (
        <div>
          <h3>Base</h3>
        </div>
      )}

      {!base && (
        <>
          <div>
            <h3>Expansões</h3>
            {expansions.map((media) => (
              <MediaCard key={media.identifiers.id} {...media} />
            ))}
          </div>

          <div>
            <h3>DLCs</h3>
            {dlcs.map((media) => (
              <MediaCard key={media.identifiers.id} {...media} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
