import { Cross, File } from "lucide-react";
import type { CreateMediaFileInput } from "@/modules/media-file/types";

type Props = {
  files: CreateMediaFileInput[];
  onRemove: (index: number) => void;
};

export function MediaFilewPreviewList({ files, onRemove }: Props) {
  if (files.length === 0) return;

  return (
    <div>
      <strong>Arquivos Selecionados</strong>

      <ul>
        {files.map(({ name, file }, index) => (
          <li key={index}>
            <File />

            <p>
              {name} — {file.name} ({(file.size / 1024).toFixed(1)} KB)
            </p>

            <button type="button" onClick={() => onRemove(index)}>
              <Cross />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
