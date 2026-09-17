import {
  FranchiseLogoLink,
  getChildlessFranchises,
  searchFranchises,
} from "@/modules/franchise";

type Props = {
  searchParams: Promise<{ q: string }>;
};

export default async function FranchisesPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const franchises = q
    ? await searchFranchises(q)
    : await getChildlessFranchises();

  if (!franchises.length) return <p>Sem resultados.</p>;

  console.log(franchises);

  return (
    <div>
      {franchises.map(({ id, title, logo: { url } }) => (
        <FranchiseLogoLink key={id} id={id} label={title} logoURL={url} />
      ))}
    </div>
  );
}
