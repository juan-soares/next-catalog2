import {
  MediaContinuityTab,
  MediaExpansionsTab,
  MediaFilesTab,
  MediaFranchisesTab,
  MediaGalleryTab,
  MediaInfoTab,
  MediaOvasTab,
  MediaSeasonsTab,
  MediaSpecialsTab,
} from "@/modules/media/components";
import { MediaDetails, MediaTab } from "@/modules/media/types";

export const MEDIA_TABS_RENDER_REGISTRY = {
  info: (media: MediaDetails) => <MediaInfoTab {...media} />,
  seasons: (media: MediaDetails) => <MediaSeasonsTab seasons={media.seasons} />,
  ovas: (media: MediaDetails) => <MediaOvasTab ovas={media.ovas} />,
  specials: (media: MediaDetails) => (
    <MediaSpecialsTab specials={media.specials} />
  ),
  expansions: (media: MediaDetails) => (
    <MediaExpansionsTab edition={media.edition} />
  ),
  continuity: (media: MediaDetails) => (
    <MediaContinuityTab continuity={media.continuity} />
  ),
  files: (media: MediaDetails) => <MediaFilesTab files={media.files} />,
  gallery: (media: MediaDetails) => <MediaGalleryTab gallery={media.gallery} />,
  franchises: (media: MediaDetails) => (
    <MediaFranchisesTab franchises={media.franchises} />
  ),
} satisfies Record<MediaTab, (media: MediaDetails) => React.ReactNode>;
