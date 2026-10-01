import { Download, File } from "lucide-react";
import type { MediaDetails } from "@/modules/media/types";

export function MediaFilesTab({ files }: Pick<MediaDetails, "files">) {
  return (
    <section>
      {files.length === 0 && <p>Nenhum arquivo disponível.</p>}

      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <div>
              <File />
            </div>

            <div>
              <p>{file.name}</p>

              <p>
                {file.extension.toUpperCase()} · {file.sizeLabel}
              </p>
            </div>

            <a
              href={file.downloadUrl}
              download
              aria-label={`Baixar ${file.name}`}
            >
              <Download />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
