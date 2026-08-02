import { SubmitActionButton } from "@/components/ui";
import { createAnimeAction } from "../../actions";
import { CHARACTER_STATUS } from "@/modules/media-item/consts";
import { MediaItemCharacterFields } from "@/modules/media-item";

export function NewAnimeForm() {
  return (
    <form action={createAnimeAction}>
      <fieldset>
        <legend>Ficha Técnica</legend>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input type="text" id="translatedTitle" name="translatedTitle" />

        <label htmlFor="releaseDate">Lançamento:</label>
        <input type="date" id="releaseDate" name="releaseDate" required />

        <label htmlFor="synopsis">Sinópse:</label>
        <textarea id="synopsis" name="synopsis" required />
      </fieldset>

      <fieldset>
        <legend>Personagens:</legend>
        <MediaItemCharacterFields />
      </fieldset>

      <fieldset>
        <legend>Tags</legend>
        <label htmlFor="theme">Temáticas</label>
        <label htmlFor="theme1">Tema1</label>
        <input type="checkbox" id="theme1" name="themes" value="theme1" />
      </fieldset>

      <fieldset>
        <legend>Arquivos:</legend>
        <label htmlFor="cover">Capa:</label>
        <input type="file" id="cover" name="cover" required />

        <label htmlFor="trailer">Trailer:</label>
        <input type="file" id="trailer" name="trailer" required />
      </fieldset>

      <fieldset>
        <legend>Controle:</legend>

        <label>Adquirido:</label>
        <input type="radio" id="acquired" name="acquired" value={"true"} />
        <label htmlFor="notAcquired">Não</label>
        <input type="radio" id="notAcquired" name="acquired" value={"false"} />
        <label htmlFor="acquired">Sim</label>

        <label>Completo:</label>
        <input type="radio" id="complete" name="complete" value={"true"} />
        <label htmlFor="complete">Sim</label>
        <input type="radio" id="notComplete" name="complete" value={"false"} />
        <label htmlFor="notcomplete">Não</label>
      </fieldset>

      <SubmitActionButton
        label="Enviar"
        confirmationMessage="Deseja realmente salvar novo Anime?"
      />
    </form>
  );
}
