export type MediaItemPageTabConfig = {
  value: string;
  label: string;
};

export type MediaItemPageTab = MediaItemPageTabConfig & {
  content: React.ReactNode;
};
