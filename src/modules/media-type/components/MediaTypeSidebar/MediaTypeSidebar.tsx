import { Search } from "lucide-react";
import Link from "next/link";
import {
  CATALOG_ATTRIBUTES_NEW_PATH,
  CATALOG_FRANCHISES_NEW_PATH,
  CATALOG_MEDIAS_NEW_PATH,
} from "@/shared/consts";
import type { MediaType } from "@/modules/media-type/types";
import { getChildlessFranchises } from "@/modules/franchise";
import { getAttributesByType } from "@/modules/attribute";

type Props = {
  isAdmin: boolean;
  typeInfo: MediaType;
};

export async function MediaTypeSidebar({ isAdmin = false, typeInfo }: Props) {
  const franchises = await getChildlessFranchises();
  const languages = await getAttributesByType("language");
  const themes = await getAttributesByType("theme");

  return (
    <aside>
      <form method="GET">
        <section>
          <input type="search" placeholder="Pesquisar..." name="q" />
          <button type="submit">
            <Search />
          </button>

          {isAdmin && (
            <Link href={`${CATALOG_MEDIAS_NEW_PATH}?q=${typeInfo.slug}`}>
              Adicionar
            </Link>
          )}
        </section>

        <section>
          <h2>Filtros</h2>
          <div>
            <h3>Idiomas</h3>
            {languages.map(({ id, label }) => (
              <label key={id}>
                <input type="checkbox" name="languageId" value={id} />
                {label}
              </label>
            ))}
            {isAdmin && (
              <Link href={CATALOG_ATTRIBUTES_NEW_PATH}>Adicionar</Link>
            )}
          </div>

          <div>
            <h3>Temáticas</h3>
            {themes.map(({ id, label }) => (
              <label key={id}>
                <input type="checkbox" name="themeId" value={id} />
                {label}
              </label>
            ))}
            {isAdmin && (
              <Link href={CATALOG_ATTRIBUTES_NEW_PATH}>Adicionar</Link>
            )}
          </div>

          <div>
            <h3>Franquias</h3>
            {franchises.map(({ id, title }) => (
              <label key={id}>
                <input type="checkbox" name="franchiseId" value={id} />
                {title}
              </label>
            ))}
            {isAdmin && (
              <Link href={CATALOG_FRANCHISES_NEW_PATH}>Adicionar</Link>
            )}
          </div>

          <div>
            <h3>Adquirido</h3>
            <label>
              <input type="checkbox" name="acquired" value="true" />
              Sim
            </label>
            <label>
              <input type="checkbox" name="acquired" value="false" />
              Não
            </label>
          </div>

          <div>
            <h3>Consumido</h3>
            <label>
              <input type="checkbox" name="acquired" value="true" />
              Sim
            </label>
            <label>
              <input type="checkbox" name="acquired" value="false" />
              Não
            </label>
          </div>
        </section>

        <button type="submit">Filtrar</button>
      </form>
    </aside>
  );
}
