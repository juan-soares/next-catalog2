import type { MediaView } from "@/modules/media/types";

type Props = {
  medias: MediaView[];
};

export function SequelFields({ medias }: Props) {
  return (
    <fieldset>
      <legend>Sequência</legend>

      <div>
        <label htmlFor="previousMediaId">Sequência de:</label>

        <select id="previousMediaId" name="previousMediaId" defaultValue="">
          <option value="">Sem antecessor...</option>
          {medias.map(
            ({ identifiers: { id }, info: { title, releaseYear } }) => (
              <option key={id} value={id}>
                {`${title} (${releaseYear})`}
              </option>
            ),
          )}
        </select>
      </div>
    </fieldset>
  );
}
