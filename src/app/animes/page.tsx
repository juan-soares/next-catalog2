import { LanguagesIcon, PlusCircleIcon, Tv2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ temporada: string }>;
};

export default async function AnimePage({ searchParams }: Props) {
  const { temporada } = await searchParams;

  const currentSeason = Number(temporada);

  const seasons = [
    {
      id: "aBakxs",
      number: 1,
      title: "",
      releaseYear: 2020,
      languages: [{ id: "akskas", label: "Português" }],
      resolutions: [{ id: "akskas", label: "1080p" }],
      cover: {
        url: "/assets/seasons/naruto-2020-anime-aaa-cover.jpg",
        alt: "Capa da temporada 1",
      },
      synopsis:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ullam sequi et hic perferendis quod, consequatur, earum aut officia, laborum in voluptate soluta nam odit facere fuga tempora quos dolor!",
      status: {
        acquired: false,
        consumed: false,
      },
      episodes: [
        {
          id: "asasa",
          number: 1,
          title: "Vamos lá!",
          status: {
            acquired: false,
            consumed: false,
          },
        },
      ],
    },
  ];

  return (
    <div>
      <section>
        <div>
          <h2>Temporadas</h2>

          <Link href="temporadas/adicionar">
            <PlusCircleIcon />
          </Link>
        </div>

        <ul>
          {seasons.map(
            ({
              id,
              number,
              title,
              releaseYear,
              languages,
              resolutions,
              cover,
              synopsis,
              status,
              episodes,
            }) => (
              <li key={id}>
                <Image src={cover.url} alt={cover.alt} width={60} height={60} />

                <div>
                  <h3>{`(${releaseYear}) ${number}ª Temporada ${title && `: ${title}`}`}</h3>

                  <div>
                    <div>
                      <LanguagesIcon />
                      {languages.map(({ label }) => label).join(", ")}
                    </div>

                    <div>
                      <Tv2Icon />
                      {resolutions.map(({ label }) => label).join(", ")}
                    </div>
                  </div>

                  <p>{synopsis}</p>

                  <div>
                    <span>{status.acquired ? "Adquirido" : "Adquirir"}</span>
                    <span>{status.consumed ? "Visto" : "Ver"}</span>
                  </div>
                </div>

                <div>
                  <Link href={`?temporada=${number}`}>Episódios</Link>

                  {currentSeason === number && (
                    <div>
                      <Link href="temporadas/adicionar">
                        <PlusCircleIcon />
                      </Link>
                      <ul>
                        {episodes.map(
                          ({
                            id,
                            number: epNumber,
                            title: epTitle,
                            status: epStatus,
                          }) => (
                            <li key={id}>
                              <p>{`EP.${epNumber} - ${epTitle}.`}</p>

                              <div>
                                <button>
                                  {epStatus.acquired ? "Adquirido" : "Adquirir"}
                                </button>
                                <button>
                                  {epStatus.consumed ? "Visto" : "Ver"}
                                </button>
                              </div>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ),
          )}
        </ul>
      </section>
    </div>
  );
}
