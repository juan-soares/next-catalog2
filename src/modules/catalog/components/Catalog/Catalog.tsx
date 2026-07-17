import { MediaType } from "@/modules/media-type";

import { CatalogItem } from "../../types";
import { CatalogList } from "../CatalogList";
import { MediaTypeSlug } from "@/modules/media-type";

type Props = {
  mediaTypeInfo: MediaType;
  mediaTypeSlug: MediaTypeSlug;
  query: string;
};

export async function Catalog({ mediaTypeInfo, query }: Props) {
  const results = await mediaTypeInfo.catalog.getItems(query);

  return (
    <div>
      <CatalogList
        results={results}
        deleteAction={mediaTypeInfo.admin.deleteAction}
      />
    </div>
  );
}
