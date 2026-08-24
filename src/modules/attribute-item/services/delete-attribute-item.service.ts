import { attributeItemRepository } from "../repository";

export async function deleteAttributeItem(id: string): Promise<boolean> {
  return attributeItemRepository.deleteOne(id);
}
