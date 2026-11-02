import type { AttributeTypeCode } from "@/modules/attribute/types";
import { ATTRIBUTE_TYPE_REGISTRY } from "@/modules/attribute/consts";
import { getAttributesByType } from "@/modules/attribute/services";
import type { MediaTypeFilter } from "@/modules/media-type/types";

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
