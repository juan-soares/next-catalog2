import type { MediaDetails } from "@/modules/media/types";

type Props = Pick<MediaDetails, "ovas">;

export function MediaOvasTab({ ovas }: Props) {
  if (!ovas) return;

  return (
    <section>
      {ovas.length === 0 && <p>Nenhuma temporada cadastrada.</p>}

      <ul>
        {ovas.map((ova) => (
          <li key={ova.id}>
            <article>
              <header>
                <h3>
                  {`(${ova.releaseYear}) ${ova.number}ª Temporada: ${ova.title} [${ova.resolution}] (${ova.language})`}
                </h3>
              </header>

              <ul>
                {ova.episodes.map((episode) => (
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
