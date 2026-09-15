import { FranchiseLogoLink, searchFranchises } from "@/modules/franchise";

type Props = {
  searchParams: Promise<{ q: string }>;
};

export default async function FranchisesPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const franchises = await searchFranchises(q);

  if (!franchises.length) return <p>Sem resultados.</p>;

  return (
    <div>
      {franchises.map(({ id, title, logo: { fileName } }) => (
        <FranchiseLogoLink key={id} id={id} label={title} logo={fileName} />
      ))}
    </div>
  );
}
