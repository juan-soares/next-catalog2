import Link from "next/link";
import { MediaTab } from "@/modules/media-tab/types";

type Props = {
  tabs: MediaTab[];
};

export function MediaTabsNavbar({ tabs }: Props) {
  return (
    <nav>
      {tabs.map(({ label, slug }) => (
        <Link key={slug} href={`?tab=${slug}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
