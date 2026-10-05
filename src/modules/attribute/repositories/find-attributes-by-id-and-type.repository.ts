import "server-only";

import { Types } from "mongoose";
import type { AttributeTypeCode } from "@/modules/attribute/types";
import { AttributeModel } from "@/modules/attribute/models";

export async function findAtrributesByIdAndType(
  ids: string[],
  type: AttributeTypeCode,
) {
  const objectIds = ids
    .filter((id) => Types.ObjectId.isValid(id))
    .map((id) => new Types.ObjectId(id));

  if (objectIds.length === 0) {
    return [];
  }

  return AttributeModel.find({
    _id: { $in: objectIds },
    type,
  }).select("_id label");
}
