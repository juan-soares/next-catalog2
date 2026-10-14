import { MediaDetails } from "@/modules/media/types";

type Props = Pick<
  MediaDetails,
  "title" | "translatedTitle" | "releaseYear" | "gameDetails"
>;

export function MediaTabInfo({
  title,
  translatedTitle,
  releaseYear,
  gameDetails,
}: Props) {
  return (
    <section>
      <dl>
        <dt>Título:</dt>
        <dd>{title}</dd>

        <dt>Título Traduzido:</dt>
        <dd>{translatedTitle}</dd>

        <dt>Lançamento:</dt>
        <dd>{releaseYear}</dd>

        {gameDetails && (
          <>
            <dt>Plataformas:</dt>
            <dd>
              {gameDetails.platforms.map((platform) => platform).join(", ")}
            </dd>

            <dt>Gêneros:</dt>
            <dd>{gameDetails.genres.map((genre) => genre).join(", ")}</dd>

            <dt>Gameplay:</dt>
            <dd>{gameDetails.gameplay}</dd>

            <dt>Modos:</dt>
            <dd>{gameDetails.modes.map((mode) => mode).join(", ")}</dd>

            <dt>Jogadores:</dt>
            <dd>{`${gameDetails.players.min} - ${gameDetails.players.max}`}</dd>
          </>
        )}
      </dl>
    </section>
  );
}
