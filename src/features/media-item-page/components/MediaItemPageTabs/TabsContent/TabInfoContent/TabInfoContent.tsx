type Props = {
  title: string;
  translatedTitle?: string;
  releaseDate: string;
};

export function TabInfoContent({ title, translatedTitle, releaseDate }: Props) {
  return (
    <div>
      <h2>Ficha Técnica</h2>

      <p>
        <strong>Título: </strong> {title}
      </p>
      {translatedTitle && (
        <p>
          <strong>Título Traduzido: </strong> {translatedTitle}
        </p>
      )}
      <p>
        <strong>Data de Lançamento: </strong> {releaseDate}
      </p>
    </div>
  );
}
