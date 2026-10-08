import Link from "next/link";
import { ADMIN_ATTRIBUTES_CREATE_PATH } from "@/shared/consts";
import { SubmitFormButton } from "@/shared/components/ui";
import { Attribute } from "@/modules/attribute";
import type { MediaTypeGroup } from "@/modules/media-type";
import type { MediaDetails } from "@/entities/media";

type Props = {
  groupType: MediaTypeGroup;
  editions: Attribute[];
  medias: MediaDetails[];
  platforms: Attribute[];
  modes: Attribute[];
  gameplays: Attribute[];
  genres: Attribute[];
  languages: Attribute[];
  themes: Attribute[];
};

export function CreateMediaForm({
  groupType,
  editions,
  platforms,
  modes,
  genres,
  gameplays,
  medias,
  languages,
  themes,
}: Props) {
  return (
    <form>
      <fieldset>
        <legend>Informações Gerais</legend>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" id="title" required />

        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input type="text" name="translatedTitle" id="translatedTitle" />

        <label htmlFor="releaseDate">Data de Lançamento:</label>
        <input type="date" name="releaseDate" id="releaseDate" required />

        <label htmlFor="synopsis">Sinopse:</label>
        <textarea id="synopsis" name="synopsis" required />
      </fieldset>

      <fieldset>
        <legend>
          <Link href={ADMIN_ATTRIBUTES_CREATE_PATH}>Detalhes</Link>
        </legend>

        {groupType !== "tv-show" && (
          <>
            <label htmlFor="languageAttributeId">Idioma:</label>
            <select
              id="languageAttributeId"
              name="languageAttributeId"
              defaultValue=""
              required
            >
              <option value="">Selecione...</option>
              {languages.map(({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </>
        )}

        {groupType === "game" && (
          <>
            <div>
              <label htmlFor="platformAttributeIds">Plataformas:</label>
              <select
                id="platformAttributeIds"
                name="platformAttributeIds"
                defaultValue=""
                required
              >
                <option value="">Selecione...</option>
                {platforms.map(({ id, label }) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="modeAttributeId">Modo:</label>
              <select
                id="modeAttributeId"
                name="modeAttributeId"
                defaultValue=""
                required
              >
                <option value="">Selecione...</option>
                {modes.map(({ id, label }) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="genreAttributeId">Gênero:</label>
              <select
                id="genreAttributeId"
                name="genreAttributeId"
                defaultValue=""
                required
              >
                <option value="">Selecione...</option>
                {genres.map(({ id, label }) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="gameplayAttributeId">Gameplay:</label>
              <select
                id="gameplayAttributeId"
                name="gameplayAttributeId"
                defaultValue=""
                required
              >
                <option value="">Selecione...</option>
                {gameplays.map(({ id, label }) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="editionAttributeId">Edição:</label>
              <select
                id="editionAttributeId"
                name="editionAttributeId"
                defaultValue=""
                required
              >
                <option value="">Selecione...</option>
                {editions.map(({ id, label }) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="baseMediaId">Jogo Base:</label>
              <select id="baseMediaId" name="baseMediaId" defaultValue="">
                <option value="">Selecione...</option>
                {medias.map(({ id, title }) => (
                  <option key={id} value={id}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </fieldset>

      <fieldset>
        <legend>Arquivos</legend>
        <label htmlFor="cover">Capa:</label>
        <input type="file" id="cover" name="cover" required />

        <label htmlFor="trailer">Trailer:</label>
        <input type="file" id="trailer" name="trailer" />
      </fieldset>

      <fieldset>
        <legend>Tags</legend>

        <div>
          <label>Temáticas:</label>
          {themes.map(({ id, label }) => (
            <label key={id}>
              <input type="checkbox" name="themeIds" value={id} />
              {label}
            </label>
          ))}
          <Link href={ADMIN_ATTRIBUTES_CREATE_PATH}>Adicionar</Link>
        </div>
      </fieldset>

      <SubmitFormButton />
    </form>
  );
}
