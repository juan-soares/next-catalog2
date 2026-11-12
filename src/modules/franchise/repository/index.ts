import "server-only";
import { findFranchiseAncestorsById } from "./find-franchise-ancestors-by-id";
import { createFranchise } from "./create-franchise.repository";
import { findChildlessFranchises } from "./find-childless-franchises.repository";
import { findFranchises } from "./find-franchises.repository";

export const franchiseRepository = {
  findMany: findFranchises,
  findAncestors: findFranchiseAncestorsById,
  findChildless: findChildlessFranchises,
  createOne: createFranchise,
};
