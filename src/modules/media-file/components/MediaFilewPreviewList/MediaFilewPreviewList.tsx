import { Cross, File } from "lucide-react";

type Props = {
  files: File[];
  onRemove: (index: number) => void;
};

export function MediaFilewPreviewList({ files, onRemove }: Props) {
  if (files.length === 0) return;

  return (
    <div>
      <strong>Arquivos Selecionados</strong>

      <ul>
        {files.map(({ name, type, size }, index) => (
          <li key={index}>
            <File />
            <p>{`${name}.${type} - ${size} KB`}</p>

            <button type="button" onClick={() => onRemove(index)}>
              <Cross />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
