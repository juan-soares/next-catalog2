import Link from "next/link";

import { MEDIA_CATEGORIES_INFO_LIST } from "@/modules/media-category/consts";
import { MEDIA_FAMILY_CONFIG } from "@/modules/media-family/consts";

export function MediaCategoriesNavbar() {
  return (
    <nav>
      {MEDIA_CATEGORIES_INFO_LIST.sort().map(({ slug, familyCode, label }) => {
        const IconComponent = MEDIA_FAMILY_CONFIG[familyCode].icon;

        return (
          <Link key={slug} href={slug}>
            <IconComponent />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
