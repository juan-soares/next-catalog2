/**
 * Barra de busca do catálogo de MediaType.
 *
 * Implementação 100% server-driven.
 * Utiliza query string (?q=) via <form method="GET">.
 *
 * Uma nova busca representa uma nova consulta do catálogo,
 * portanto substitui o estado anterior da URL.
 *
 * Não possui estado client-side e não depende de JavaScript
 * para funcionamento básico de busca.
 */

type Props = {
  placeholder?: string;
  query?: string;
};

export default function CatalogSearchbar({
  placeholder = "Buscar...",
  query = "",
}: Props) {
  return (
    <form method="GET">
      <input
        type="search"
        name="q"
        defaultValue={query}
        placeholder={placeholder}
      />

      <button type="submit">Buscar</button>
    </form>
  );
}
