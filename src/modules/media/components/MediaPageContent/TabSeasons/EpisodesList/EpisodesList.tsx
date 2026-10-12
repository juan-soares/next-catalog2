import Link from "next/link";
import { MediaDetails, Season } from "@/modules/media/types";

type Props = {
  episodes: Season["episodes"];
  mediaType: MediaDetails["type"];
  seasonId: Season["id"];
};

export function EpisodesList({ episodes, mediaType, seasonId }: Props) {
  if (episodes.length === 0)
    return (
      <p>
        Sem episódios cadastrados.{" "}
        <Link
          href={`${mediaType.path}/adicionar/temporadas/episodios?season=${seasonId}`}
        >
          Adicionar?
        </Link>
      </p>
    );

  return (
    <ul>
      {episodes.map(({ id, number, title, status }) => (
        <li key={id}>
          <h3 key={number}>
            {`EP.${number}: ${title}`}{" "}
            <button>{status.acquired ? "Adquirido" : "Adquirir"}</button>
            <button>{status.consumed ? "Consumido" : "Consumir"}</button>
          </h3>
        </li>
      ))}
    </ul>
  );
}
