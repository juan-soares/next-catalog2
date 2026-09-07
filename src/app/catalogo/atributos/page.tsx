type Props = {
  searchParams: Promise<{ sort: string }>;
};

export default async function AttributesPage({ searchParams }: Props) {
  const { sort = "label-asc" } = await searchParams;

  return (
    <div>
      <h1>Overview</h1>
    </div>
  );
}
