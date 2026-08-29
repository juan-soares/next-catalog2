import { MediaItemPageTab } from "../../types";

type Props = {
  tabs: MediaItemPageTab[];
};

export function MediaItemPageTabsNavbar({ tabs }: Props) {
  return (
    <nav>
      <form method="GET">
        {tabs.map(({ value, label }) => (
          <button key={value} type="submit" name="tab" value={value}>
            {label}
          </button>
        ))}
      </form>
    </nav>
  );
}
