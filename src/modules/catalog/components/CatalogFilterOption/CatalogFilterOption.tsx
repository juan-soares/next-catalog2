import { CatalogFilterOption as CatalogFilterOptionType } from "../../types";

type Props = {
  name: string;
  values: CatalogFilterOptionType[];
};

export function CatalogFilterOption({ name, values }: Props) {
  return (
    <>
      {values.map(({ value, label }) => (
        <div key={value}>
          <input type="checkbox" value={value} name={name} />
          <label>{label}</label>
        </div>
      ))}
    </>
  );
}
