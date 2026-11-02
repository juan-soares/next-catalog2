import Link from "next/link";

type Props = {
  slug: string;
};

export function MediaTypeAsidebar({ slug }: Props) {
  return (
    <aside>
      <Link href={`/${slug}/adicionar`}>Adicionar</Link>
    </aside>
  );
}
