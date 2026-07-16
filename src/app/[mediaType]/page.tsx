type Props = {
  params: Promise<{ mediaType: string }>;
};

export default async function MediaTypePage({ params }: Props) {
  const { mediaType } = await params;

  return (
    <div>
      <h1>{mediaType}</h1>
    </div>
  );
}
