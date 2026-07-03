import { FilterDefinition } from "../../types";

type Props = {
  filters: FilterDefinition[];
};

export function CatalogSidebar({ filters }: Props) {
  return (
    <aside>
      {filters.map((filter) => (
        <div key={filter.key}>
          <h4>{filter.label}</h4>
        </div>
      ))}
    </aside>
  );
}
