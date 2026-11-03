import type { MediaProgress } from "@/modules/media/types";

type Props = {
  currentValue: MediaProgress;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function ProgressFields({ currentValue, onChange }: Props) {
  return (
    <fieldset>
      <legend>Progresso</legend>

      <div>
        <label>Adquirido</label>

        <label htmlFor="acquired-false">
          <input
            type="radio"
            id="acquired-false"
            name="acquired"
            required
            value="false"
            checked={currentValue.acquired === false}
            onChange={onChange}
          />
          Não
        </label>

        <label htmlFor="acquired-true">
          <input
            type="radio"
            id="acquired-true"
            name="acquired"
            required
            value="true"
            checked={currentValue.acquired === true}
            onChange={onChange}
          />
          Sim
        </label>
      </div>

      <div>
        <label>Consumido</label>

        <label htmlFor="consumed-false">
          <input
            type="radio"
            id="consumed-false"
            name="consumed"
            required
            value="false"
            checked={currentValue.consumed === false}
            onChange={onChange}
          />
          Não
        </label>

        <label htmlFor="consumed-true">
          <input
            type="radio"
            id="consumed-true"
            name="consumed"
            required
            value="true"
            checked={currentValue.consumed === true}
            onChange={onChange}
          />
          Sim
        </label>
      </div>
    </fieldset>
  );
}
