export function AssetFields() {
  return (
    <fieldset>
      <legend>Arquivos</legend>

      <div>
        <label htmlFor="cover">Capa:</label>
        <input
          type="file"
          id="cover"
          name="cover"
          accept="image/jpeg"
          required
        />
      </div>

      <div>
        <label htmlFor="trailer">Trailer:</label>
        <input type="file" id="trailer" name="trailer" accept="video/mp4" />
      </div>
    </fieldset>
  );
}
