import { MEDIA_TAB_LIST } from "@/modules/media-tab/consts";
import type { MediaTypeGroupCode } from "@/modules/media-type-group/types";

type Props = {
  currentMediaGroup: MediaTypeGroupCode;
};

export function MediaTabsNavbar({ currentMediaGroup }: Props) {
  return (
    <form method="GET">
      {MEDIA_TAB_LIST.filter((tab) =>
        tab.group.includes(currentMediaGroup),
      ).map(({ slug, label }) => (
        <button key={slug} type="submit" name="tab" value={slug}>
          {label}
        </button>
      ))}
    </form>
  );
}
