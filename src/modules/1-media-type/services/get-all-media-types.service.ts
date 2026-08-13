import { mediaTypesRegistry } from "../registry";
import { MediaType } from "../types";

export function getAllMediaTypes(): MediaType[] {
  return Object.values(mediaTypesRegistry);
}
