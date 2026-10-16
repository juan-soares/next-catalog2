import { Attribute } from "@/modules/attribute/types";

import { ATTRIBUTES_MOCK } from "../consts/attribute.mock.const";

export async function getAttributes(): Promise<Attribute[]> {
  return ATTRIBUTES_MOCK;
}
