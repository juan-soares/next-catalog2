import Link from "next/link";
import {
  CATALOG_FRANCHISES_NEW_PATH,
  CATALOG_FRANCHISES_PATH,
} from "@/shared/consts";
import { isAdminUser } from "@/modules/auth";
import { FranchiseLogoLink } from "@/modules/franchise/components";
import { getChildlessFranchises } from "@/modules/franchise/services";

export async function FranchiseAsideNav() {
  const isAdmin = await isAdminUser();
  const franchises = await getChildlessFranchises();

  return (
    <aside>
      <header>
        <Link href={CATALOG_FRANCHISES_PATH}>
          <h1>Franquias</h1>
        </Link>
        {isAdmin && <Link href={CATALOG_FRANCHISES_NEW_PATH}>Adicionar</Link>}
      </header>

      {!franchises.length && <p>Sem itens na lista.</p>}
      <nav>
        {franchises.map(({ id, title, logo: { fileName } }) => (
          <FranchiseLogoLink key={id} id={id} label={title} logo={fileName} />
        ))}
      </nav>
    </aside>
  );
}
