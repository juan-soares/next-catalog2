export function ProgressFields() {
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
            defaultChecked
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
            defaultChecked
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
          />
          Sim
        </label>
      </div>
    </fieldset>
  );
}
