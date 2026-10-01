import { randomInt } from "node:crypto";

const PUBLIC_ID_CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function generateMediaPublicId(): string {
  let result = "";

  for (let i = 0; i < 5; i++) {
    result += PUBLIC_ID_CHARACTERS[randomInt(PUBLIC_ID_CHARACTERS.length)];
  }

  return result;
}
