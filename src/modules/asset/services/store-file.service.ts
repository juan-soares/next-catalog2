import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import type { AssetTypeCode } from "@/modules/asset/types";
import { ASSET_TYPE_REGISTRY } from "@/modules/asset/consts";

type Props = {
  file: File;
  filename: string;
  type: AssetTypeCode;
};

export async function storeFile({
  file,
  filename,
  type,
}: Props): Promise<void> {
  if (path.basename(filename) !== filename) {
    throw new Error("Nome de arquivo inválido.");
  }

  const { storage } = ASSET_TYPE_REGISTRY[type];
  const directory = path.join(process.cwd(), storage);
  await mkdir(directory, { recursive: true });

  await writeFile(
    path.join(directory, filename),
    Buffer.from(await file.arrayBuffer()),
    { flag: "wx" },
  );
}
