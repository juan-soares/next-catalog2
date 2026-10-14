export type MediaUnit = {
  id: string;
  number: number;
  title: string;
  status: {
    acquired: boolean;
    consumed: boolean;
  };
};
