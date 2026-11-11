import "server-only";
import { findFranchiseAncestorsById } from "./find-franchise-ancestors-by-id";
import { createFranchise } from "./create-franchise.repository";
import { findChildlessFranchises } from "./find-childless-franchises.repository";

export const franchiseRepository = {
  findAncestors: findFranchiseAncestorsById,

  findChildless: findChildlessFranchises,
  createOne: createFranchise,
};
