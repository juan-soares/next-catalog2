import { AttributeTypeKey } from "@/modules/attribute-type";
import { AttributeModel } from "../model";
import { connectToDatabase } from "@/lib/mongoose";
import {
  AttributeItem,
  AttributeItemDocument,
  AttributeItemSortOption,
} from "../types";
import { mapAttributeDocToAttributeItem } from "../mappers";
import { ATTRIBUTE_ITEM_SORT_MONGO_MAP } from "../consts";

type SearchParams = {
  sort: AttributeItemSortOption;
  attributeType?: AttributeTypeKey;
};

export async function findAttributeItems({
  sort = "label-asc",
  attributeType,
}: SearchParams): Promise<AttributeItem[]> {
  await connectToDatabase();

  const sortMongo = ATTRIBUTE_ITEM_SORT_MONGO_MAP[sort];
  const filter = attributeType ? { attributeType: attributeType } : {};

  const attributeDocs: AttributeItemDocument[] = await AttributeModel.find(
    filter,
  )
    .collation({ locale: "pt", strength: 1 })
    .sort(sortMongo)
    .lean();

  return attributeDocs.map(mapAttributeDocToAttributeItem);
}
