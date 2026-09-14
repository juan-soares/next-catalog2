type Props = {
  searchParams: Promise<{ q: string }>;
};

export default async function FranchisesPage({ searchParams }: Props) {
  const { q } = await searchParams;

  return <div></div>;
}
