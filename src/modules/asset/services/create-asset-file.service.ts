import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
import crypto from "node:crypto";

import { slugify } from "@/shared/libs/helpers";
import type {
  CreateAssetInput,
  CreateAssetFileResult,
} from "@/modules/asset/types";

export async function createAssetFile(
  input: CreateAssetInput,
): Promise<CreateAssetFileResult> {
  const { title, file, module, storage } = input;

  const extension = path.extname(file.name).toLowerCase();

  const fileName = `${module}-${slugify(title)}-${crypto
    .randomUUID()
    .replaceAll("-", "")}${extension}`;

  const filePath = path.join(storage.directory, fileName);

  const url = `${storage.url}/${fileName}`;

  await mkdir(storage.directory, {
    recursive: true,
  });

  const buffer = Buffer.from(await file.arrayBuffer());

  await writeFile(filePath, buffer);

  return {
    fileName,
    url,
  };
}
