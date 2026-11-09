import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { ASSET_TYPE_REGISTRY } from "@/modules/asset/consts";
import type { AssetTypeCode } from "@/modules/asset/types";

type Props = {
  file: File;
  filename: string;
  identifier: string;
  type: AssetTypeCode;
};

export async function storeFile({
  file,
  filename,
  identifier,
  type,
}: Props): Promise<void> {
  if (
    path.basename(identifier) !== identifier ||
    path.basename(filename) !== filename
  ) {
    throw new Error("Nome de arquivo ou pasta inválido.");
  }

  const { storage } = ASSET_TYPE_REGISTRY[type];

  const basePath = path.resolve(process.cwd(), storage);
  const folderPath = path.resolve(basePath, identifier);

  if (!folderPath.startsWith(`${basePath}${path.sep}`)) {
    throw new Error("Caminho de pasta inválido.");
  }

  await mkdir(folderPath, { recursive: true });

  const filePath = path.join(folderPath, filename);

  await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
}
