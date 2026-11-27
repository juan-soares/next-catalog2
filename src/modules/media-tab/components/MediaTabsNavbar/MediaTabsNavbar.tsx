import Link from "next/link";
import type { MediaTabCode } from "@/modules/media-tab/types";
import type { MediaCategoriesStructureCode } from "@/modules/media-category-structure/types";
import {
  MEDIA_TABS_BY_CATEGORIES_STRUCTURE_CONFIG,
  MEDIA_TABS_CONFIG,
} from "@/modules/media-tab/consts";

type Props = {
  categoryStructure: MediaCategoriesStructureCode;
  currentTab: MediaTabCode;
};

export function MediaTabsNavbar({ categoryStructure, currentTab }: Props) {
  const tabCodes = MEDIA_TABS_BY_CATEGORIES_STRUCTURE_CONFIG[categoryStructure];

  const tabs = tabCodes.map((code) => ({
    code,
    ...MEDIA_TABS_CONFIG[code],
  }));

  return (
    <nav>
      {tabs.map(({ code, param, icon: Icon, label }) => (
        <Link
          key={code}
          href={param}
          aria-current={currentTab === code ? "page" : undefined}
        >
          <Icon />
          {label}
        </Link>
      ))}
    </nav>
  );
}
