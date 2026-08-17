type Props = {
  results: [];
};

export function CatalogList({ results }: Props) {
  if (!results.length)
    return (
      <div>
        <p>Sem resultados.</p>
      </div>
    );

  return (
    <ul>
      <li></li>
    </ul>
  );
}
