import { MediaTypeTab } from "../../types";

type Props = {
  mediaTypeTabs: MediaTypeTab[];
};

export function MediaItemPageTabsNavbar({ mediaTypeTabs }: Props) {
  return (
    <nav>
      <form method="GET">
        {mediaTypeTabs.map(({ value, label }) => (
          <button key={value} type="submit" name="tab" value={value}>
            {label}
          </button>
        ))}
      </form>
    </nav>
  );
}
