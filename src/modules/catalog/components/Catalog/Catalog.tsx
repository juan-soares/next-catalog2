import { MediaType } from "@/modules/media-type";
import { CatalogResults } from "../CatalogResults";

type Props = {
  mediaTypeInfo: MediaType;
};

export async function Catalog({ mediaTypeInfo }: Props) {
  return (
    <div>
      <CatalogResults />
    </div>
  );
}
