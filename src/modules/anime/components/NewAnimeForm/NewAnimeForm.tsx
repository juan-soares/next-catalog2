import { SubmitActionButton } from "@/components/ui";
import { createAnimeAction } from "../../actions";

export function NewAnimeForm() {
  return (
    <form action={createAnimeAction}>
      <label htmlFor="title">Título:</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="translatedTitle">Título Traduzido:</label>
      <input type="text" id="title" name="title" />

      <label htmlFor="releaseDate">Lançamento:</label>
      <input type="date" id="releaseDate" name="releaseDate" required />

      <label htmlFor="cover">Capa:</label>
      <input type="file" id="cover" name="cover" required />

      <SubmitActionButton
        label="Enviar"
        confirmationMessage="Deseja realmente salvar novo Anime?"
      />
    </form>
  );
}
