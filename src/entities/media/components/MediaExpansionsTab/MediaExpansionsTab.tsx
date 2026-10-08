import Image from "next/image";
import Link from "next/link";
import type { MediaDetails } from "@/entities/media/types";

export function MediaExpansionsTab({ edition }: Pick<MediaDetails, "edition">) {
  if (!edition) return;

  return (
    <section>
      <article>
        <h3>Base</h3>
        <Link href={`/media/${edition.base.id}`}>
          <Image
            src={edition.base.cover.url}
            alt={edition.base.cover.alt}
            width={80}
            height={120}
          />

          <p>{edition.base.title}</p>

          <span>{edition.base.releaseYear}</span>
        </Link>
      </article>

      <article>
        <h3>Expansões</h3>
        <ul>
          {edition.expansions.map((expansion) => (
            <li key={expansion.id}>
              <Link href={`/media/${expansion.id}`}>
                <Image
                  src={expansion.cover.url}
                  alt={expansion.cover.alt}
                  width={80}
                  height={120}
                />

                <p>{expansion.title}</p>

                <span>{expansion.releaseYear}</span>
              </Link>
            </li>
          ))}
        </ul>
      </article>

      <article>
        <h3>DLCs</h3>

        <ul>
          {edition.dlcs.map((dlc) => (
            <li key={dlc.id}>
              <Link href={`/media/${dlc.id}`}>
                <Image
                  src={dlc.cover.url}
                  alt={dlc.cover.alt}
                  width={80}
                  height={120}
                />

                <p>{dlc.title}</p>

                <span>{dlc.releaseYear}</span>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
