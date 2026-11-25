import type {
  MediaFamilyCode,
  MediaFamilyInfo,
} from "@/modules/media-family/types";
import {
  BookIcon,
  BookImageIcon,
  ClapperboardIcon,
  Gamepad2Icon,
  Music2Icon,
  TvIcon,
} from "lucide-react";

export const MEDIA_FAMILY_CONFIG = {
  episodic: {
    icon: TvIcon,
  },

  movie: {
    icon: ClapperboardIcon,
  },

  book: {
    icon: BookIcon,
  },

  game: {
    icon: Gamepad2Icon,
  },

  volumes: {
    icon: BookImageIcon,
  },

  music: {
    icon: Music2Icon,
  },
} satisfies Record<MediaFamilyCode, MediaFamilyInfo>;
