import Link from "next/link";
import Image from "next/image";
import type { MediaDetails } from "@/modules/media/types";

export function MediaContinuityTab({
  continuity,
}: Pick<MediaDetails, "continuity">) {
  return (
    <section>
      <div>
        <strong>Anterior</strong>
        {continuity.previous && (
          <Link href={`/media/${continuity.previous.id}`}>
            <Image
              src={continuity.previous.cover.url}
              alt={continuity.previous.cover.alt}
              width={80}
              height={120}
            />

            <p>{continuity.previous.title}</p>

            <span>{continuity.previous.releaseYear}</span>
          </Link>
        )}
      </div>

      <div>
        <strong>Seguinte</strong>
        {continuity.next && (
          <Link href={`/media/${continuity.next.id}`}>
            <Image
              src={continuity.next.cover.url}
              alt={continuity.next.cover.alt}
              width={80}
              height={120}
            />
            <p>{continuity.next.title}</p>
            <span>{continuity.next.releaseYear}</span>
          </Link>
        )}
      </div>
    </section>
  );
}
