export type FranchiseView = {
  id: string;
  slug: string;
  title: string;
  translatedTitle: string;

  logo: {
    url: string;
    alt: string;
  };

  parentFranchiseId: string | null;
};
