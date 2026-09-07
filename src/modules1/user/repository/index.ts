import { findUserByEmail } from "./find-user-by-email.repository";

export const userRepository = {
  findByEmail: findUserByEmail,
};
