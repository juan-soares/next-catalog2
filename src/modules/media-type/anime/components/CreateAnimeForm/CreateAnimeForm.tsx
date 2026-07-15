import { ConfirmSubmitButton } from "@/components/ui";
import { createAnimeAction } from "../../actions";

export function CreateAnimeForm() {
  return (
    <form action={createAnimeAction}>
      <fieldset>
        <legend>Fica Técnica</legend>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input type="text" id="translatedTitle" name="translatedTitle" />

        <label htmlFor="releaseDate">Lançamento:</label>
        <input type="date" id="releaseDate" name="releaseDate" required />
      </fieldset>

      <fieldset>
        <legend>Arquivos</legend>
        <label htmlFor="cover">Capa:</label>
        <input type="file" id="cover" name="cover" />

        <label htmlFor="trailer">Trailer:</label>
        <input type="file" id="trailer" name="trailer" />
      </fieldset>

      <ConfirmSubmitButton
        label="Salvar"
        confirmationMessage="Deseja realmente salvar?"
      />
    </form>
  );
}
