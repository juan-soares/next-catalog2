import { MediaType } from "@/modules/media-type";
import { CatalogResults } from "../CatalogResults";
import { CatalogItem } from "../../types";

type Props = {
  mediaTypeInfo: MediaType;
};

export async function Catalog({ mediaTypeInfo }: Props) {
  const results: CatalogItem[] = [];

  return (
    <div>
      <CatalogResults results={results} deleteAction={deleteAction} />
    </div>
  );
}
