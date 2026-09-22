import type { MediaDetails } from "@/modules/media/types";

type Props = Pick<MediaDetails, "seasons">;

export function MediaSeasonsTab({ seasons }: Props) {
  if (!seasons) return;

  return (
    <section>
      {seasons.length === 0 && <p>Nenhuma temporada cadastrada.</p>}

      <ul>
        {seasons.map((season) => (
          <li key={season.id}>
            <article>
              <header>
                <h3>
                  {`(${season.releaseYear}) ${season.number}ª Temporada: ${season.title} [${season.resolution}] (${season.language})`}
                </h3>
              </header>

              <ul>
                {season.episodes.map((episode) => (
                  <li key={episode.id}>
                    <span>
                      EP.{episode.number}: {episode.title}
                    </span>

                    <span>
                      {episode.userStatus.acquired ? "Adquirido" : "Adquirir"}
                    </span>

                    <span>
                      {episode.userStatus.consumed ? "Consumido" : "Consumir"}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
