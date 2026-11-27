import Image from "next/image";
import Link from "next/link";
import { PlusCircleIcon, LanguagesIcon, Tv2Icon } from "lucide-react";
import type { MediaViewCollection } from "@/modules/media/types";
import { MediaUnitList } from "../MediaUnitList";

type Props = {
  url: string;
  seasons: MediaViewCollection[];
  currentNumber: number | null;
};

export function MediaTabSeasons({ url, seasons, currentNumber }: Props) {
  return (
    <section>
      <div>
        <h2>Temporadas</h2>

        <Link href={`${url}/temporadas/adicionar`}>
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
              <Image src={cover.src} alt={cover.alt} width={60} height={60} />

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
                    <Link href={`${url}/temporadas/${id}/episodios/adicionar`}>
                      <PlusCircleIcon />
                    </Link>

                    <MediaUnitList units={units} structure="episodic" />
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
