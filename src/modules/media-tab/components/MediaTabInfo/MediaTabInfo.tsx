import type { MediaView } from "@/modules/media/types";

type Props = Pick<
  MediaView,
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
              {gameDetails.platforms
                .map(({ label }) => {
                  label;
                })
                .join(", ")}
            </dd>

            <dt>Gêneros:</dt>
            <dd>{gameDetails.genres.map(({ label }) => label).join(", ")}</dd>

            <dt>Gameplay:</dt>
            <dd>{gameDetails.gameplay.label}</dd>

            <dt>Modos:</dt>
            <dd>{gameDetails.modes.map(({ label }) => label).join(", ")}</dd>

            <dt>Jogadores:</dt>
            <dd>{`${gameDetails.players.min} - ${gameDetails.players.max}`}</dd>
          </>
        )}
      </dl>
    </section>
  );
}
