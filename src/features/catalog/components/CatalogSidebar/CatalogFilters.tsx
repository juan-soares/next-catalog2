import { auth } from "@/features/auth/next-auth/auth";
import { CatalogFilter } from "../../types";
import Link from "next/link";
import { ATTRIBUTES_CATALOG_NEW_PATH } from "@/consts/paths";

type Props = {
  filters: CatalogFilter[];
};

export async function CatalogFilters({ filters }: Props) {
  const session = await auth();

  return (
    <form>
      <h2>Filtros</h2>

      {filters.map(({ label, fieldName, path, options }) => (
        <article key={fieldName}>
          <h3>{label}</h3>
          {session && <Link href={path}>+</Link>}

          {options.map(({ value, label }) => (
            <label key={value}>
              <input type="checkbox" name={fieldName} value={value} />
              {label}
            </label>
          ))}
        </article>
      ))}

      <button type="submit">Filtrar</button>
    </form>
  );
}
