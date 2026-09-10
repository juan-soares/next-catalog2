import { isAdminUser } from "@/modules/auth";
import { CATALOG_FRANCHISES_NEW_PATH } from "@/shared/consts";
import { FranchiseLogoLink } from "@/modules/franchise";
import {
  getFranchiseFamily,
  getParentFranchiseLogoLinks,
} from "@/modules/franchise/services";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ franchise: string }>;
};

export default async function FranchisesPage({ searchParams }: Props) {
  const isAdmin = await isAdminUser();
  const { franchise } = await searchParams;
  const franchises = await getParentFranchiseLogoLinks();
  const family = await getFranchiseFamily(franchise);

  return (
    <div>
      <aside>
        <header>
          <h1>Franquias</h1>
          {isAdmin && <Link href={CATALOG_FRANCHISES_NEW_PATH}>Adicionar</Link>}
        </header>

        <nav>
          {franchises.map((logoLink) => (
            <FranchiseLogoLink {...logoLink} />
          ))}
        </nav>

        {}
      </aside>
    </div>
  );
}
