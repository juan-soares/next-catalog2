import { MediaCard } from "@/modules/media/components";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "sequel">;

export function MediaTabSequelContent({ sequel: { previous, next } }: Props) {
  return (
    <section>
      <h2>Sequência</h2>

      <article>
        <strong>Anterior</strong>
        {previous ? <MediaCard {...previous} /> : <span>"N/A"</span>}
      </article>

      <article>
        <strong>Sequência</strong>
        {next ? <MediaCard {...next} /> : <span>"N/A"</span>}
      </article>
    </section>
  );
}
