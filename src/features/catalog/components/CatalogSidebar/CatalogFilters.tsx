export function CatalogFilters() {
  return (
    <div>
      <h2>Filtros</h2>

      <article>
        <h3>Tipos</h3>
        <label>
          <input type="checkbox" name="type" value="franchise1" />
          Franquia
        </label>

        <label>
          <input type="checkbox" name="type" value="subfranchise1" />
          Sub-Franquias
        </label>
      </article>
    </div>
  );
}
