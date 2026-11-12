import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

type Props = {
  filename: string;
  storagePath: string;
  file: File;
};

export async function storeFile({
  filename,
  storagePath,
  file,
}: Props): Promise<void> {
  if (path.basename(filename) !== filename) {
    throw new Error("Nome de arquivo inválido.");
  }

  const folderPath = path.resolve(process.cwd(), storagePath);

  await mkdir(folderPath, { recursive: true });

  const filePath = path.join(folderPath, filename);

  await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
}
