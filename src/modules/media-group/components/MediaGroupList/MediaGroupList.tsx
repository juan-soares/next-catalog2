import { Season } from "@/modules/media/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  mediaGroupItems: Season[];
  mediaTypeSlugPath: string;
  mediaSlug: string;
  mediaGroupTypeSlug: string;
};

export function MediaGroupList({
  mediaTypeSlugPath,
  mediaGroupItems,
  mediaSlug,
  mediaGroupTypeSlug,
}: Props) {
  if (mediaGroupItems.length === 0)
    return (
      <p>
        Sem registros ainda.{" "}
        <Link
          href={`${mediaTypeSlugPath}/adicionar/${mediaGroupTypeSlug}?media=${mediaSlug}`}
        >
          Adicionar?
        </Link>
      </p>
    );

  return (
    <ul>
      {mediaGroupItems.map(
        ({
          id,
          trailer,
          cover,
          synopsis,
          groupType,
          number,
          releaseYear,
          resolution,
          language,
          title,
          translatedTitle,
        }) => (
          <li key={id}>
            <article>
              <div>
                <aside>
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src={trailer.url} type={trailer.fileType} />
                    Seu navegador não suporta a reprodução de vídeos.
                  </video>
                  <Image
                    src={cover.url}
                    alt={cover.alt}
                    width={60}
                    height={60}
                  />
                </aside>

                <header>
                  <p>
                    {`${groupType.label} ${number} • ${releaseYear} • [${resolution}] (${language})`}
                  </p>
                </header>

                <main>
                  <h2>
                    {title}{" "}
                    {translatedTitle && <span>{`(${translatedTitle})`}</span>}
                  </h2>
                  <p>{synopsis}</p>
                  <button>Detalhes</button>
                </main>
              </div>

              <div></div>
            </article>
          </li>
        ),
      )}
    </ul>
  );
}
