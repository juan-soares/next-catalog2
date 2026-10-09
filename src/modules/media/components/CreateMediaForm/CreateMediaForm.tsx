import { createMediaAction } from "@/modules/media/actions";

export function CreateMediaForm() {
  return (
    <form action={createMediaAction}>
      <fieldset>
        <legend>Informações Gerais</legend>

        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input type="text" id="translatedTitle" name="translatedTitle" />
      </fieldset>

      <button type="submit">ok</button>
    </form>
  );
}
