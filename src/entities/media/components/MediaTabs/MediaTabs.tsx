import Link from "next/link";
import { MEDIA_TABS_LIST } from "@/entities/media/consts";

export function MediaTabs() {
  return (
    <nav>
      {MEDIA_TABS_LIST.map(({ tab, label }) => (
        <Link key={tab} href={`?tab=${tab}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
