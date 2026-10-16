import {
  prepareMediaSearchOptionsFromSearchParams,
  searchMedias,
} from "@/modules/media";
import { GlobalSearchPage } from "@/modules/global-search";

type Props = {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const rawSearchParams = await searchParams;

  const searchOptions =
    prepareMediaSearchOptionsFromSearchParams(rawSearchParams);

  const results = searchOptions.term
    ? await searchMedias(searchOptions.term)
    : [];

  return <GlobalSearchPage term={searchOptions.term || ""} results={results} />;
}
