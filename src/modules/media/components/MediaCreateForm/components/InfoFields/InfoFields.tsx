import type { CreateMediaInputState } from "@/modules/media/types";

type Props = {
  mediaInputs: CreateMediaInputState;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export function InfoFields({ mediaInputs, onChange }: Props) {
  return (
    <fieldset>
      <legend>Informações Gerais</legend>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          value={mediaInputs.title}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input
          type="text"
          id="translatedTitle"
          name="translatedTitle"
          value={mediaInputs.translatedTitle}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="releaseDate">Data de Lançamento:</label>
        <input
          type="date"
          id="releaseDate"
          name="releaseDate"
          required
          value={mediaInputs.releaseDate}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="synopsis">Sinopse:</label>
        <textarea
          id="synopsis"
          name="synopsis"
          required
          value={mediaInputs.synopsis}
          onChange={onChange}
        />
      </div>
    </fieldset>
  );
}
