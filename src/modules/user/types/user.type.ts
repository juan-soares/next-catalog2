export type User = {
  id: string;
  nickname: string;
  email: string;
};

export type UserWithPassword = User & {
  passwordHash: string;
};
