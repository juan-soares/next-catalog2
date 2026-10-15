type MediaTypeFilterOption = {
  id: string;
  label: string;
};

export type MediaTypeFilter = {
  field: string;
  label: string;
  options: MediaTypeFilterOption[];
};
