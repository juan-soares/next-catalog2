import type { MediaView } from "@/modules/media/types";

type Props = {
  medias: MediaView[];
};

export function GameExpansionsFields({ medias }: Props) {
  return (
    <fieldset>
      <legend>Expansões</legend>

      <div>
        <label htmlFor="expansionType">Tipo:</label>

        <select id="expansionType" name="expansionType" defaultValue="">
          <option value="" hidden>
            Selecione...
          </option>
          <option value="expansion">Expansão</option>
          <option value="dlc">DLC</option>
        </select>
      </div>

      <div>
        <label htmlFor="baseMediaId">Mídia Base:</label>

        <select id="baseMediaId" name="baseMediaId" defaultValue="">
          <option value="" hidden>
            Selecione...
          </option>

          {medias.map(
            ({ identifiers: { id }, info: { title, releaseYear } }) => (
              <option key={id} value={id}>{`${title} (${releaseYear})`}</option>
            ),
          )}
        </select>
      </div>
    </fieldset>
  );
}
