import { MediaSortOptionKey } from "./media-sort-option-key.type";

export type MediaSearchOptions = {
  query?: string;
  sort?: MediaSortOptionKey;
  filters?: {};
};
