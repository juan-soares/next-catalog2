import { MEDIA_TAB_LIST } from "@/modules/media-tab/consts";

export function MediaTabsNavbar() {
  return (
    <form method="GET">
      {MEDIA_TAB_LIST.map(({ slug, label }) => (
        <button key={slug} type="submit" name="tab" value={slug}>
          {label}
        </button>
      ))}
    </form>
  );
}
