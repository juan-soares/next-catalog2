import Link from "next/link";
import type { MediaFamilyCode } from "@/modules/media-family/types";
import type { MediaTabCode } from "@/modules/media-tab/types";
import {
  MEDIA_TABS_BY_FAMILY_CONFIG,
  MEDIA_TABS_CONFIG,
} from "@/modules/media-tab/consts";

type Props = {
  familyCode: MediaFamilyCode;
  currentTab: MediaTabCode;
};
export function MediaTabsNavbar({ familyCode, currentTab }: Props) {
  const tabCodes = MEDIA_TABS_BY_FAMILY_CONFIG[familyCode];

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
