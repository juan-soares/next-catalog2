import { MediaDetails } from "@/modules/media/types";
import { TabInfo } from "@/modules/media/components";

type Props = {
  currentTab: string;
  media: MediaDetails;
};

export function MediaPageContent({ currentTab = "info", media }: Props) {
  switch (currentTab) {
    case "info":
      return <TabInfo {...media} />;

    default:
      return <TabInfo {...media} />;
  }
}
