import "server-only";
import { findFranchiseAncestorsById } from "./find-franchise-ancestors-by-id";
import { createFranchise } from "./create-franchise.repository";

export const franchiseRepository = {
  findAncestors: findFranchiseAncestorsById,

  createOne: createFranchise,
};
