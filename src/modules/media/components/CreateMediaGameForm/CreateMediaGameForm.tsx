import type { AttributeView } from "@/modules/attribute/types";
import type {
  CreateMediaGameInfoInput,
  CreateMediaInitialInputState,
} from "@/modules/media/types";
import {
  FormCheckboxGroupField,
  FormSection,
  FormSelectField,
} from "@/shared/components/Form";

type Props = {
  media: CreateMediaInitialInputState;
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
