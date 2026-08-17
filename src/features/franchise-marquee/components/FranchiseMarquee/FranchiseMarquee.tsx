import Image from "next/image";
import { FRANCHISE_LOGO_PATH } from "@/consts/paths";
import { getFranchiseMarqueeItems } from "../../services";

export async function FranchiseMarquee() {
  const franchises = await getFranchiseMarqueeItems();

  return (
    <div>
      <ul>
        {franchises.map(({ id, slug, title, logo }) => (
          <li key={id}>
            <Image
              src={FRANCHISE_LOGO_PATH + logo}
              alt={`Logo da franquia ${title}`}
              width={60}
              height={60}
            />
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
