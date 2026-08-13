import { getMediaTypesInfo } from "@/modules/media-type";
import { mapMediaTypeInfoToMediaTypeLink } from "./MediaTypesNavbar.mappers";
import { MediaTypeLink } from "./MediaTypesNavbar.types";

export function getMediaTypesLinks(): MediaTypeLink[] {
  const mediaTypes = getMediaTypesInfo();

  return mediaTypes.map(mapMediaTypeInfoToMediaTypeLink);
}
