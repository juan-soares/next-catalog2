import type { MediaDetails } from "@/modules/media/types";

type Props = Pick<MediaDetails, "specials">;

export function MediaSpecialsTab({ specials }: Props) {
  if (!specials) return;

  return (
    <section>
      {specials.length === 0 && <p>Nenhum especial cadastrado.</p>}

      <ul>
        {specials.map((special) => (
          <li key={special.id}>
            <article>
              <header>
                <h3>
                  {`(${special.releaseYear}) ${special.number}ª Temporada: ${special.title} [${special.resolution}] (${special.language})`}
                </h3>
              </header>

              <ul>
                {special.episodes.map((episode) => (
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
