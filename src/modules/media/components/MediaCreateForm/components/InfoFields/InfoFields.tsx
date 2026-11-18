export function InfoFields() {
  return (
    <fieldset>
      <legend>Informações Gerais</legend>
      <div>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" required />
      </div>

      <div>
        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input type="text" id="translatedTitle" name="translatedTitle" />
      </div>

      <div>
        <label htmlFor="releaseDate">Data de Lançamento:</label>
        <input type="date" id="releaseDate" name="releaseDate" required />
      </div>

      <div>
        <label htmlFor="synopsis">Sinopse:</label>
        <textarea id="synopsis" name="synopsis" required />
      </div>
    </fieldset>
  );
}
