import { MediaTabCode } from "@/modules/media/types";
import { MEDIA_TABS_LIST } from "@/modules/media/consts";

export function getValidMediaTabFromSearchParams(
  tab: string | string[] | undefined,
): MediaTabCode {
  if (typeof tab !== "string") {
    return "info";
  }

  const tabDetails = MEDIA_TABS_LIST.find(({ slug }) => slug === tab);

  return tabDetails?.code ?? "info";
}
