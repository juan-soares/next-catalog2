import Link from "next/link";
import {
  CATALOG_FRANCHISES_NEW_PATH,
  CATALOG_FRANCHISES_PATH,
} from "@/shared/consts";
import { isAdminUser } from "@/modules/auth";
import { FranchiseLogoLink } from "@/modules/franchise/components";
import { getParentFranchiseLogoLinks } from "@/modules/franchise/services";

export async function FranchiseAsideNav() {
  const isAdmin = await isAdminUser();
  const logoLinks = await getParentFranchiseLogoLinks();

  return (
    <aside>
      <header>
        <Link href={CATALOG_FRANCHISES_PATH}>
          <h1>Franquias</h1>
        </Link>
        {isAdmin && <Link href={CATALOG_FRANCHISES_NEW_PATH}>Adicionar</Link>}
      </header>

      {!logoLinks.length && <p>Sem itens na lista.</p>}
      <nav>
        {logoLinks.map((link) => (
          <FranchiseLogoLink key={link.id} {...link} />
        ))}
      </nav>
    </aside>
  );
}
