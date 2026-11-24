import { LanguagesIcon, PlusCircleIcon, Tv2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    tab?: "temporadas" | "ovas" | "especiais";
    n?: string;
  }>;
};

export default async function AnimePage({ searchParams }: Props) {
  const mediaSlug = "naruto-2020-aaa";
  const { tab, n } = await searchParams;

  const currentNumber = n ? Number(n) : null;

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
  const ovas = [
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
  const specials = [];

  return (
    <div>
      <nav>
        <Link href="?tab=temporadas">Temporadas</Link>
        <Link href="?tab=ovas">OVAs</Link>
        <Link href="?tab=especiais">Especiais</Link>
      </nav>
      {tab === "temporadas" && (
        <section>
          <div>
            <h2>Temporadas</h2>

            <Link href={`/animes/${mediaSlug}/temporadas/adicionar`}>
              <PlusCircleIcon />
            </Link>
          </div>

          {!seasons.length && <p>Sem registros.</p>}

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
                  <Image
                    src={cover.url}
                    alt={cover.alt}
                    width={60}
                    height={60}
                  />

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
                    <Link href={`?tab=temporadas&n=${number}`}>Episódios</Link>

                    {currentNumber === number && (
                      <div>
                        <Link
                          href={`/animes/${mediaSlug}/temporadas/${id}/episodios/adicionar`}
                        >
                          <PlusCircleIcon />
                        </Link>

                        {!episodes.length && <p>Sem registros.</p>}

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
                                    {epStatus.acquired
                                      ? "Adquirido"
                                      : "Adquirir"}
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
      )}
      {tab === "ovas" && (
        <section>
          <div>
            <h2>OVAS</h2>

            <Link href={`/animes/${mediaSlug}/ovas/adicionar`}>
              <PlusCircleIcon />
            </Link>
          </div>

          {!ovas.length && <p>Sem registros.</p>}

          <ul>
            {ovas.map(
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
                  <Image
                    src={cover.url}
                    alt={cover.alt}
                    width={60}
                    height={60}
                  />

                  <div>
                    <h3>{`(${releaseYear}) ${number}ª OVA ${title && `: ${title}`}`}</h3>

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
                    <Link href={`?tab=ovas&n=${number}`}>Episódios</Link>

                    {currentNumber === number && (
                      <div>
                        <Link
                          href={`/animes/${mediaSlug}/ovas/${id}/episodios/adicionar`}
                        >
                          <PlusCircleIcon />
                        </Link>

                        {!episodes.length && <p>Sem registros.</p>}

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
                                    {epStatus.acquired
                                      ? "Adquirido"
                                      : "Adquirir"}
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
      )}
      {tab === "especiais" && (
        <section>
          <div>
            <h2>Especiais</h2>

            <Link href={`/animes/${mediaSlug}/especiais/adicionar`}>
              <PlusCircleIcon />
            </Link>
          </div>

          {!specials.length && <p>Sem registros.</p>}

          <ul>
            {specials.map(
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
                  <Image
                    src={cover.url}
                    alt={cover.alt}
                    width={60}
                    height={60}
                  />

                  <div>
                    <h3>{`(${releaseYear}) ${number}ª Especial ${title && `: ${title}`}`}</h3>

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
                    <Link href={`?tab=especiais&n=${number}`}>Episódios</Link>

                    {currentNumber === number && (
                      <div>
                        <Link
                          href={`/animes/${mediaSlug}/especiais/${id}/episodios/adicionar`}
                        >
                          <PlusCircleIcon />
                        </Link>

                        {!episodes.length && <p>Sem registros.</p>}

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
                                    {epStatus.acquired
                                      ? "Adquirido"
                                      : "Adquirir"}
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
      )}
    </div>
  );
}
