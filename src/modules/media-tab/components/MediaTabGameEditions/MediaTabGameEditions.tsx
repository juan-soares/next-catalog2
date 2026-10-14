import Link from "next/link";
import Image from "next/image";
import { MediaDetails } from "@/modules/media/types";

type Props = Pick<MediaDetails, "gameEdition">;

export function MediaTabGameEditions({ gameEdition }: Props) {
  if (!gameEdition) return null;

  if (gameEdition.base)
    return (
      <section>
        <article>
          <h2>Base</h2>

          <Link href={gameEdition.base.path}>
            <Image
              src={gameEdition.base.cover.url}
              alt={gameEdition.base.cover.alt}
              width={60}
              height={60}
            />
            <h3>{gameEdition.base.title}</h3>
            <p>{gameEdition.base.releaseYear}</p>
          </Link>
        </article>
      </section>
    );

  return (
    <section>
      <article>
        <h2>Expansões</h2>

        <ul>
          {gameEdition.expansions.map(({ path, cover, title, releaseYear }) => (
            <li key={path}>
              <Link href={path}>
                <Image src={cover.url} alt={cover.alt} width={60} height={60} />
                <h3>{title}</h3>
                <p>{releaseYear}</p>
              </Link>
            </li>
          ))}
        </ul>
      </article>

      <article>
        <h2>DLCs</h2>

        <ul>
          {gameEdition.dlcs.map(({ path, cover, title, releaseYear }) => (
            <li key={path}>
              <Link href={path}>
                <Image src={cover.url} alt={cover.alt} width={60} height={60} />
                <h3>{title}</h3>
                <p>{releaseYear}</p>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
