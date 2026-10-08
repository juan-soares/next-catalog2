import { Franchise } from "@/entities/franchise/types";

export type Media = {
  id: string;
  title: string;
  cover: string;
  type: string;
  releaseDate: Date;

  franchiseId: Franchise["id"];
};
