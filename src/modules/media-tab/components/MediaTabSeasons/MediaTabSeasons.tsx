import Image from "next/image";
import { Link, PlusCircleIcon, LanguagesIcon, Tv2Icon } from "lucide-react";
import type { MediaViewEpisodicFamily } from "@/modules/media/types";

type Props = {
  url: string;
  seasons: MediaViewEpisodicFamily["collections"]["seasons"];
  currentNumber: number | null;
};

export function MediaTabSeasons({ seasons, currentNumber }: Props) {
  return (
    <section>
      <div>
        <h2>Temporadas</h2>

        <Link href={`/animes/${mediaSlug}/temporadas/adicionar`}>
          <PlusCircleIcon />
        </Link>
      </div>

      {!seasons.length && <p>Sem registros.</p>}

      <ul>
        {seasons.map(
          ({
            id,
            number,
            title,
            releaseYear,
            languages,
            resolutions,
            cover,
            synopsis,
            status,
            units,
          }) => (
            <li key={id}>
              <Image src={cover.url} alt={cover.alt} width={60} height={60} />

              <div>
                <h3>{`(${releaseYear}) ${number}ª Temporada ${title && `: ${title}`}`}</h3>

                <div>
                  <div>
                    <LanguagesIcon />
                    {languages.map(({ label }) => label).join(", ")}
                  </div>

                  <div>
                    <Tv2Icon />
                    {resolutions.map(({ label }) => label).join(", ")}
                  </div>
                </div>

                <p>{synopsis}</p>

                <div>
                  <span>{status.acquired ? "Adquirido" : "Adquirir"}</span>
                  <span>{status.consumed ? "Visto" : "Ver"}</span>
                </div>
              </div>

              <div>
                <Link href={`?tab=temporadas&n=${number}`}>Episódios</Link>

                {currentNumber === number && (
                  <div>
                    <Link
                      href={`/animes/${mediaSlug}/temporadas/${id}/episodios/adicionar`}
                    >
                      <PlusCircleIcon />
                    </Link>

                    {!units.length && <p>Sem registros.</p>}

                    <ul>
                      {units.map(
                        ({
                          id,
                          number: epNumber,
                          title: epTitle,
                          status: epStatus,
                        }) => (
                          <li key={id}>
                            <p>{`${epNumber} - ${epTitle}.`}</p>

                            <div>
                              <button>
                                {epStatus.acquired ? "Adquirido" : "Adquirir"}
                              </button>
                              <button>
                                {epStatus.consumed ? "Visto" : "Ver"}
                              </button>
                            </div>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
