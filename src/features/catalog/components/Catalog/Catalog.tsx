import { auth } from "@/features/auth/next-auth/auth";
import { CatalogFilter, CatalogListItem } from "../../types";
import { CatalogMainContent } from "../CatalogMainContent";
import { CatalogSidebar } from "../CatalogSidebar";

type Props = {
  info: {
    title: string;
    newPath: string;
    filters: CatalogFilter[];
    results: CatalogListItem[];
  };
};

export async function Catalog({ info }: Props) {
  const session = await auth();
  const { title, newPath, filters, results } = info;

  return (
    <div>
      <h1>{title}</h1>
      <CatalogSidebar
        hasUser={session !== undefined}
        newPath={newPath}
        filters={filters}
      />
      <CatalogMainContent list={results} />
    </div>
  );
}
