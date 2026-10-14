import { MediaTabCode } from "@/modules/media-tab/types";
import { MEDIA_TAB_LIST } from "@/modules/media-tab/consts";

export function getValidMediaTabFromSearchParams(
  tab: string | string[] | undefined,
): MediaTabCode {
  if (typeof tab !== "string") {
    return "info";
  }

  const tabDetails = MEDIA_TAB_LIST.find(({ slug }) => slug === tab);

  return tabDetails?.code ?? "info";
}
