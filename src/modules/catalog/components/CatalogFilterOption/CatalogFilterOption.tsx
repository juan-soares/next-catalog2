import { CatalogFilterOption as CatalogFilterOptionType } from "../../types";

export function CatalogFilterOption({ label, key }: CatalogFilterOptionType) {
  return (
    <>
      <input type="checkbox" value={key} />
      <label>{label}</label>
    </>
  );
}
