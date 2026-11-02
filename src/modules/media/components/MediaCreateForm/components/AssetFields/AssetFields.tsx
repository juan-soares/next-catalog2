type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function AssetFields({ onChange }: Props) {
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
          onChange={onChange}
          required
        />
      </div>

      <div>
        <label htmlFor="trailer">Trailer:</label>
        <input
          type="file"
          id="trailer"
          name="trailer"
          accept="video/mp4"
          onChange={onChange}
        />
      </div>
    </fieldset>
  );
}
