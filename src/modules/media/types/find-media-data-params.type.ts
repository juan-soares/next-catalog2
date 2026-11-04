import type { MediaData } from "@/modules/media/types";

type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends object
    ? K | `${K}.${NestedKeyOf<T[K]>}`
    : K;
}[keyof T & string];

type NestedValueOf<T, K extends string> = K extends keyof T
  ? T[K]
  : K extends `${infer First}.${infer Rest}`
    ? First extends keyof T
      ? NestedValueOf<T[First], Rest>
      : never
    : never;

type MediaDataFindFields = Extract<
  NestedKeyOf<MediaData> | "_id",
  | "_id"
  | "progress.acquired"
  | "progress.consumed"
  | "info.typeCode"
  | "info.translatedTitle"
  | "identifiers.slug"
  | "info.title"
>;

export type FindMediaDataParams = {
  fields?: Partial<{
    [K in MediaDataFindFields]: NestedValueOf<MediaData, K>;
  }> & {
    _id?: string;
  };
};
