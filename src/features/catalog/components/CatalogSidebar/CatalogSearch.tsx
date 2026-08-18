import { Search } from "lucide-react";

export function CatalogSearch() {
  return (
    <form>
      <input type="search" placeholder="Pesquisar..." name="q" />
      <button type="submit">
        <Search size={10} />
      </button>
    </form>
  );
}
