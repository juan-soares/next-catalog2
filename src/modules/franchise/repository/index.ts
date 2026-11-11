import "server-only";
import { createFranchise } from "./create-franchise.repository";

export const franchiseRepository = {
  createOne: createFranchise,
};
