import { MediaItemDetails } from "./media-item-details.type";

export type MediaItemPageConfig = {
  deleteAction: (formData: FormData) => Promise<void>;
  mediaItemInfo: MediaItemDetails;
};
