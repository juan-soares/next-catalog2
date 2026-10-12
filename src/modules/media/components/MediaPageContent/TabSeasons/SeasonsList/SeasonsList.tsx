import Link from "next/link";
import Image from "next/image";
import { MediaDetails, Season } from "@/modules/media/types";
import { EpisodesList } from "@/modules/media/components";

type Props = {
  type: MediaDetails["type"];
  slug: string;
  seasons: Season[];
};

export function SeasonsList({ type, slug, seasons }: Props) {
  if (seasons.length === 0)
    return (
      <p>
        Sem temporadas cadastradas.{" "}
        <Link href={`${type.path}/adicionar/temporadas?title=${slug}`}>
          Adicionar?
        </Link>
      </p>
    );

  return (
    <ul>
      {seasons.map(
        ({
          id,
          number,
          releaseYear,
          title,
          language,
          resolution,
          cover,
          trailer,
          synopsis,
          status,
          episodes,
        }) => (
          <li key={id}>
            <article>
              <h2>
                {`(${releaseYear}) ${number}° Temporada: ${title} [${resolution}] (${language})`}{" "}
                <span>{status.acquired ? "Adquirido" : "Adquirir"}</span>
                <span>{status.consumed ? "Consumido" : "Consumir"}</span>
              </h2>

              <div>
                <div>
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
                  <p>{synopsis}</p>
                </div>

                <EpisodesList
                  mediaType={type}
                  episodes={episodes}
                  seasonId={id}
                />
              </div>
            </article>
          </li>
        ),
      )}
    </ul>
  );
}
