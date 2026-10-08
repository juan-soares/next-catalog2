export type AttributeTypeCode =
  | "language"
  | "theme"
  | "genre"
  | "edition"
  | "platform"
  | "mode"
  | "gameplayStyle"
  | "characterStatus"
  | "universeType";

export type AttributeType = {
  code: AttributeTypeCode;
  label: string;
  slug: string;
};
