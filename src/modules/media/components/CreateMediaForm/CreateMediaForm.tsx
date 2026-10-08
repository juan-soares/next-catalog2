import Link from "next/link";
import {
  ADMIN_ATTRIBUTES_CREATE_PATH,
  ADMIN_FRANCHISES_CREATE_PATH,
} from "@/shared/consts";
import { SubmitFormButton } from "@/shared/components/ui";
import { Attribute } from "@/modules/attribute";
import type { MediaType } from "@/modules/media-type";
import type { MediaDetails } from "@/entities/media";
import { FranchiseDetails } from "@/modules/franchise/types";

type Props = {
  mediaType: MediaType;
  editions: Attribute[];
  medias: MediaDetails[];
  platforms: Attribute[];
  modes: Attribute[];
  gameplays: Attribute[];
  genres: Attribute[];
  languages: Attribute[];
  themes: Attribute[];
  subfranchises: FranchiseDetails[];
};

export function CreateMediaForm({
  mediaType,
  editions,
  platforms,
  modes,
  genres,
  gameplays,
  medias,
  languages,
  themes,
  subfranchises,
}: Props) {
  return (
    <form>
      <input type="hidden" name="typeCode" value={mediaType.code} required />

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

      {mediaType.groupType !== "tv-show" && (
        <fieldset>
          <legend>
            <Link href={ADMIN_ATTRIBUTES_CREATE_PATH}>Detalhes</Link>
          </legend>

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

          {mediaType.groupType === "game" && (
            <>
              <div>
                <label htmlFor="platformAttributeIds">Plataformas</label>
                <select
                  id="platformAttributeIds"
                  name="platformAttributeIds"
                  defaultValue=""
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
      )}
      <fieldset>
        <legend>Arquivos</legend>
        <label htmlFor="cover">Capa:</label>
        <input type="file" id="cover" name="cover" required />

        <label htmlFor="trailer">Trailer:</label>
        <input type="file" id="trailer" name="trailer" />

        <label htmlFor="gallery">Galeria:</label>
        <input type="file" id="gallery" name="gallery" multiple />

        <label htmlFor="files">Arquivos:</label>
        <input type="file" id="files" name="files" multiple />
      </fieldset>

      <fieldset>
        <legend>Sequência</legend>
        <label htmlFor="sequelMediaId">Sequência:</label>
        <select id="sequelMediaId" name="sequelMediaId" defaultValue="">
          <option value="">Selecione...</option>
          {medias.map(({ id, title, releaseYear }) => (
            <option key={id} value={id}>
              {`${title} (${releaseYear})`}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend>Tags</legend>

        <div>
          <Link href={ADMIN_ATTRIBUTES_CREATE_PATH}>Temáticas</Link>
          {themes.map(({ id, label }) => (
            <label key={id}>
              <input type="checkbox" name="themeIds" value={id} />
              {label}
            </label>
          ))}
        </div>

        <div>
          <legend>
            <Link href={ADMIN_FRANCHISES_CREATE_PATH}>Franquias</Link>
          </legend>
          <select id="franchiseId" name="franchiseId" defaultValue="">
            <option value="">Selecione...</option>
            {subfranchises.map(({ id, title }) => (
              <option key={id} value={id}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <SubmitFormButton />
    </form>
  );
}
