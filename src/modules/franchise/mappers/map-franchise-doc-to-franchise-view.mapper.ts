import { PUBLIC_URLS } from "@/shared/consts";
import type { FranchiseDoc, FranchiseView } from "@/modules/franchise/types";

export function mapFranchiseDocToFranchiseView(
  doc: FranchiseDoc,
): FranchiseView {
  return {
    id: doc._id.toString(),
    slug: doc.slug,

    title: doc.title,
    translatedTitle: doc.translatedTitle,

    logo: {
      url: `${PUBLIC_URLS.FRANCHISES.ASSETS}/${doc.logo.filename}`,
      alt: `Logotipo da franquia ${doc.title}`,
    },

    parentFranchiseId: doc.parentFranchiseId?._id.toString() ?? null,
  };
}
