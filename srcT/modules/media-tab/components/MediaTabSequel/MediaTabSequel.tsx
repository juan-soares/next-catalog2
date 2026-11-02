import Image from "next/image";
import Link from "next/link";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "sequel">;

export function MediaTabSequel({ sequel: { previous, next } }: Props) {
  return (
    <section>
      <article>
        <h2>Anterior</h2>

        {previous && (
          <Link href={previous.path}>
            <Image
              src={previous.cover.url}
              alt={previous.cover.alt}
              width={60}
              height={60}
            />
            <h3>{previous.title}</h3>
            <p>{previous.releaseYear}</p>
          </Link>
        )}
      </article>

      <article>
        <h2>Sequência</h2>

        {next && (
          <Link href={next.path}>
            <Image
              src={next.cover.url}
              alt={next.cover.alt}
              width={60}
              height={60}
            />
            <h3>{next.title}</h3>
            <p>{next.releaseYear}</p>
          </Link>
        )}
      </article>
    </section>
  );
}
