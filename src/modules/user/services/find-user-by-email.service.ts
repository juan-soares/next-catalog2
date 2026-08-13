import { userRepository } from "../repository";
import { User } from "../types";

export async function findUserByEmail(email: string): Promise<User | null> {
  return userRepository.findByEmail(email);
}
