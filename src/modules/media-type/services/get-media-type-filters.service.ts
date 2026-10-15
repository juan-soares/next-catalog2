import {
  AttributeTypeCode,
  ATTRIBUTE_TYPE_REGISTRY,
} from "@/modules/attribute";
import { getAttributesByType } from "@/modules/attribute";
import { MediaTypeFilter } from "@/modules/media-type/types";

export async function getMediaTypeFilters(
  filterCodes: AttributeTypeCode[],
): Promise<MediaTypeFilter[]> {
  return Promise.all(
    filterCodes.map(async (code) => {
      const filterInfo = ATTRIBUTE_TYPE_REGISTRY[code];
      const options = await getAttributesByType(filterInfo.code);

      return {
        ...filterInfo,
        options,
      };
    }),
  );
}
