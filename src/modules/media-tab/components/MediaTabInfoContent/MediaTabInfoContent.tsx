import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "info">;

export function MediaTabInfoContent({ info }: Props) {
  const date = info.releaseDate.toLocaleDateString("pt-BR");
  const gameDetails = info.gameDetails;

  return (
    <section>
      <h2>Informações</h2>

      <dl>
        <div>
          <dt>Título:</dt>
          <dd>{info.title}</dd>
        </div>

        <div>
          <dt>Título Traduzido:</dt>
          <dd>{info.translatedTitle || "N/A"}</dd>
        </div>

        <div>
          <dt>Lançamento:</dt>
          <dd>{date}</dd>
        </div>

        {gameDetails && (
          <>
            <div>
              <dt>Plataformas:</dt>
              <dd>
                {gameDetails.platforms.map(({ label }) => label).join(", ") ||
                  "N/A"}
              </dd>
            </div>

            <div>
              <dt>Gêneros:</dt>
              <dd>
                {gameDetails.genres.map(({ label }) => label).join(", ") ||
                  "N/A"}
              </dd>
            </div>

            <div>
              <dt>Gameplays:</dt>
              <dd>
                {gameDetails.gameplays.map(({ label }) => label).join(", ") ||
                  "N/A"}
              </dd>
            </div>

            <div>
              <dt>Modos:</dt>
              <dd>
                {gameDetails.modes.map(({ label }) => label).join(", ") ||
                  "N/A"}
              </dd>
            </div>

            <div>
              <dt>Jogadores:</dt>
              <dd>
                {gameDetails.players.min} - {gameDetails.players.max}
              </dd>
            </div>
          </>
        )}
      </dl>
    </section>
  );
}
