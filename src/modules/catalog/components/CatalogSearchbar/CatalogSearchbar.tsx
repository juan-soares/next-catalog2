/**
 * Barra de busca do catálogo de MediaType.
 *
 * Implementação 100% server-driven.
 * Utiliza query string (?q=) via <form method="GET">.
 *
 * Não possui estado client-side e não depende de JavaScript
 * para funcionamento básico de busca.
 */

type Props = {
  placeholder?: string;
  defaultValue?: string;
};

export default function CatalogSearchBar({
  placeholder = "Buscar...",
  defaultValue = "",
}: Props) {
  return (
    <form method="GET">
      <input
        type="text"
        name="q"
        defaultValue={defaultValue}
        placeholder={placeholder}
      />

      <button type="submit">Buscar</button>
    </form>
  );
}
