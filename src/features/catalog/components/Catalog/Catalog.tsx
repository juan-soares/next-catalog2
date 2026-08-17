import { CatalogMainContent } from "../CatalogMainContent";
import { CatalogSidebar } from "../CatalogSidebar";

type Props = {
  info: {
    title: string;
    path: string;
  };
};

export function Catalog({ info }: Props) {
  const { title, path } = info;

  return (
    <div>
      <CatalogSidebar title={title} path={path} />

      <CatalogMainContent />

      <footer></footer>
    </div>
  );
}
