export type FilterGroup = {
  key: string;
  label: string;

  options: FilterOption[];
};

export type FilterOption = {
  label: string;
  value: string;
  selected?: boolean;
};
