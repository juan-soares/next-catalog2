export type Universe = {
  id: string;

  title: string;
  translatedTitle?: string;
  slug: string;
  description?: string;

  createdAt: Date;
  updatedAt: Date;
};
