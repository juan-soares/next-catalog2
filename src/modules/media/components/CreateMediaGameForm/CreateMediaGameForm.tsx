import type { AttributeView } from "@/modules/attribute/types";
import type {
  CreateMediaGameInfoInput,
  CreateMediaInitialInputState,
  MediaView,
} from "@/modules/media/types";
import {
  FormCheckboxGroupField,
  FormRadioField,
  FormSection,
  FormSelectField,
} from "@/shared/components/Form";
import { MEDIA_GAME_EDITIONS_LIST } from "@/modules/media/consts";

type Props = {
  media: CreateMediaInitialInputState;
  medias: MediaView[];
  platforms: AttributeView[];
  genres: AttributeView[];
  gameplays: AttributeView[];
  modes: AttributeView[];
  onGameInfoChange: <K extends keyof CreateMediaGameInfoInput>(
    field: K,
    value: CreateMediaGameInfoInput[K],
  ) => void;
};

export function CreateMediaGameForm({
  platforms,
  genres,
  gameplays,
  modes,
  media,
  medias,
  onGameInfoChange,
}: Props) {
  const gameInfo = media.gameInfo;

  if (!gameInfo) return null;

  return (
    <FormSection title="Detalhes do jogo">
      <FormCheckboxGroupField
        fieldName="platforms"
        label="Plataformas"
        options={platforms.map(({ id, label }) => ({ id, label }))}
        value={gameInfo.platforms}
        onChange={(value) => onGameInfoChange("platforms", value)}
      />

      <FormCheckboxGroupField
        fieldName="genres"
        label="Gêneros"
        options={genres.map(({ id, label }) => ({ id, label }))}
        value={gameInfo.genres}
        onChange={(value) => onGameInfoChange("genres", value)}
      />

      <FormSelectField
        fieldName="gameplay"
        label="Gameplay"
        options={gameplays.map(({ id, label }) => ({ value: id, label }))}
        onChange={(event) =>
          onGameInfoChange("gameplay", event.currentTarget.value)
        }
      />

      <FormCheckboxGroupField
        fieldName="modes"
        label="Modos"
        options={modes.map(({ id, label }) => ({ id, label }))}
        value={gameInfo.modes}
        onChange={(value) => onGameInfoChange("modes", value)}
      />

      <FormSection title="Edição">
        <FormRadioField
          fieldName="edition"
          label="Edição"
          currentValue={gameInfo.edition}
          options={MEDIA_GAME_EDITIONS_LIST.map(({ code, label }) => ({
            value: code,
            label,
          }))}
          onChange={(_, value) => onGameInfoChange("edition", value)}
        />

        {gameInfo.edition !== "base" && (
          <div>
            <FormSelectField
              fieldName="base"
              label="Base"
              options={medias.map(({ id, title, releaseYear }) => ({
                value: id,
                label: `${title} (${releaseYear})`,
              }))}
            />
          </div>
        )}
      </FormSection>

      <div>
        <strong>Participantes</strong>

        <label htmlFor="player-min">Mínimo:</label>
        <input
          id="player-min"
          name="player-min"
          type="number"
          min={1}
          value={gameInfo.players.min}
          onChange={(event) =>
            onGameInfoChange("players", {
              ...gameInfo.players,
              min: Number(event.currentTarget.value),
            })
          }
          required
        />

        <label htmlFor="player-max">Máximo:</label>
        <input
          id="player-max"
          name="player-max"
          type="number"
          min={1}
          value={gameInfo.players.max}
          onChange={(event) =>
            onGameInfoChange("players", {
              ...gameInfo.players,
              max: Number(event.currentTarget.value),
            })
          }
          required
        />
      </div>
    </FormSection>
  );
}
