import {
  CalendarDays,
  DotIcon,
  FileIcon,
  Gamepad2Icon,
  LanguagesIcon,
  PlusCircleIcon,
  Tag,
  TagsIcon,
  Tv2Icon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    tab?:
      | "info"
      | "temporadas"
      | "ovas"
      | "especiais"
      | "personagens"
      | "continuidade"
      | "galeria"
      | "arquivos"
      | "franquias";
    n?: string;
  }>;
};

export default async function AnimePage({ searchParams }: Props) {
  const mediaSlug = "naruto-2020-aaa";
  const { tab, n } = await searchParams;

  const currentNumber = n ? Number(n) : null;

  const midia = {
    id: "asasbasa",
    slug: "naruto-2020-aHad",
    url: "/animes/naruto-2020-aHad",

    info: {
      title: "Naruto",
      translatedTitle: "",

      release: {
        date: "01/10/2026",
        year: 2026,
      },

      synopsis:
        "Naruto acompanha a jornada de Naruto Uzumaki, um jovem ninja que sonha em se tornar Hokage, o líder e ninja mais poderoso de sua vila. Rejeitado por carregar a Raposa de Nove Caudas dentro de si, ele busca reconhecimento, amizade e força enquanto enfrenta desafios cada vez maiores.",

      cover: {
        src: "/assets/medias/naruto-2020-aHad/cover.jpg",
        alt: "Capa do do anime Naruto.",
      },
      trailer: {
        src: "/assets/medias/naruto-2020-aHad/trailer.mp4",
        type: "video/mp4",
      },
    },

    attributes: {
      languages: [{ id: "asasa", label: "Português" }],
      genres: [{ id: "asasasas", label: "Ação" }],
      gameplays: [],
      modes: [],
      themes: [
        { id: "asbRaasa", label: "Nijas" },
        { id: "asasa", label: "Japão" },
      ],
    },

    collections: {
      seasons: [
        {
          id: "aBakxs",
          number: 1,
          title: "",
          releaseYear: 2020,
          languages: [{ id: "akskas", label: "Português" }],
          resolutions: [{ id: "akskas", label: "1080p" }],
          cover: {
            url: "/assets/medias/naruto-2020-anime-aaa/cover-season1.jpg",
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
      ],
      ovas: [
        {
          id: "aBakxs",
          number: 1,
          title: "",
          releaseYear: 2020,
          languages: [{ id: "akskas", label: "Português" }],
          resolutions: [{ id: "akskas", label: "1080p" }],
          cover: {
            url: "/assets/medias/naruto-2020-anime-aaa/cover-ova1.jpg",
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
      ],
      specials: [],
    },

    characters: [
      {
        id: "asasax",
        url: "/personagens/naruto-universe-3312",
        name: "Naruto",
        codenames: [{ id: "asasa", label: "Hokagi" }],
        avatar: {
          src: "/assets/characters/naruto-3312.png",
          alt: "Avatar do personagem Naruto.",
        },
        status: { id: "acE", label: "Ativo" },
      },
    ],

    continuity: {
      previous: null,
      next: {
        id: "akassakska",
        url: "/animes/naruto-shippuden-2026-asres",
        cover: {
          src: "/assets/media/naruto-shippuden-2026-asres/cover.jpg",
          alt: "Capa do anime Naruto Shippuden",
        },
        title: "Naruto Shippuden",
        release: { year: 2026 },
      },
    },

    gallery: [
      {
        id: "aslasoas",
        src: "/assets/medias/naruto-2020-aHad/gallery-1.jpg",
        alt: "Imagem 1 do anime Naruto.",
      },
      {
        id: "aslzzsoas",
        src: "/assets/medias/naruto-2020-aHad/gallery-2.jpg",
        alt: "Imagem 2 do anime Naruto.",
      },
      {
        id: "asEEas",
        src: "/assets/medias/naruto-2020-aHad/gallery-3.jpg",
        alt: "Imagem 3 do anime Naruto.",
      },
    ],

    files: [
      {
        id: "asat",
        title: "Manual de Regras",
        src: "/assets/medias/naruto-2020-aHad/manual-de-regras.pdf",
        extension: "pdf",
      },
    ],

    franchises: {
      main: {
        id: "312asase",
        title: "Naruto",
        url: "/animes/naruto-2020-ff198",
        logo: {
          src: "/assets/franchises/naruto-2020-ff198/logo.png",
          alt: "Logotipo da franquia Naruto",
        },
      },

      subs: [
        {
          id: "312asase",
          title: "Naruto Anime 2020",
          url: "/animes/naruto-anime-2020-ff198",
          logo: {
            src: "/assets/franchises/naruto-anime-2020-ff198/logo.png",
            alt: "Logotipo da franquia Naruto Anime.",
          },
        },
      ],
    },

    status: {
      acquired: false,
      consumed: false,
    },
  };

  const {
    id,
    info,
    attributes,
    collections,
    characters,
    continuity,
    gallery,
    files,
    franchises,
    status,
  } = midia;

  return (
    <div>
      <div>
        <header>
          <div>
            <video autoPlay loop muted playsInline>
              <source src={info.trailer.src} type={info.trailer.type} />
            </video>
          </div>

          <div>
            <Image
              src={info.cover.src}
              alt={info.cover.alt}
              width={60}
              height={60}
            />

            <div>
              <h1>
                {info.title} <span>{`(${info.release.year})`}</span>
              </h1>
              <h2>{info.translatedTitle}</h2>
            </div>

            <div>
              <p>{info.synopsis}</p>
            </div>

            <div>
              <div>
                <LanguagesIcon />
                {attributes.languages.map(({ label }) => label).join(", ")}
              </div>

              <div>
                <Gamepad2Icon />
                {attributes.genres.map(({ label }) => label).join(", ")}
              </div>

              <div>
                <TagsIcon />
                {attributes.themes.map(({ label }) => label).join(", ")}
              </div>
            </div>

            <div>
              <Link href={`/franquias/${franchises.main.url}`}>
                <Image
                  src={franchises.main.logo.src}
                  alt={franchises.main.logo.alt}
                  width={60}
                  height={60}
                />
              </Link>
            </div>

            <div>
              <button>{status.acquired ? "Adquirido" : "Adquirir"}</button>
              <button>{status.consumed ? "Consumido" : "Consumir"}</button>
            </div>
          </div>
        </header>

        <nav>
          <Link href="?tab=info">Informações</Link>
          <Link href="?tab=temporadas">Temporadas</Link>
          <Link href="?tab=ovas">OVAs</Link>
          <Link href="?tab=especiais">Especiais</Link>
          <Link href="?tab=personagens">Personagens</Link>
          <Link href="?tab=continuidade">Continuidade</Link>
          <Link href="?tab=galeria">Galeria</Link>
          <Link href="?tab=arquivos">Arquivos</Link>
          <Link href="?tab=franquias">Franquias</Link>
        </nav>

        <main>
          {tab === "info" && (
            <section>
              <h2>Informações</h2>

              <dl>
                <div>
                  <dt>
                    <Tag /> Título:
                  </dt>
                  <dd>{info.title}</dd>
                </div>
                <div>
                  <dt>
                    <Tag /> Título Traduzido:
                  </dt>
                  <dd>{info.translatedTitle || "N/A"}</dd>
                </div>
                <div>
                  <dt>
                    <CalendarDays /> Lançamento:
                  </dt>
                  <dd>{info.release.date}</dd>
                </div>
                <div>
                  <dt>
                    <LanguagesIcon /> Idiomas:
                  </dt>
                  <dd>
                    {attributes.languages.map(({ label }) => label).join(", ")}
                  </dd>
                </div>
                <div>
                  <dt>
                    <Gamepad2Icon /> Gêneros:
                  </dt>
                  <dd>
                    {attributes.genres.map(({ label }) => label).join(", ")}
                  </dd>
                </div>
                <div>
                  <dt>
                    <TagsIcon /> Temáticas:
                  </dt>
                  <dd>
                    {attributes.themes.map(({ label }) => label).join(", ")}
                  </dd>
                </div>
              </dl>
            </section>
          )}

          {tab === "temporadas" && (
            <section>
              <div>
                <h2>Temporadas</h2>

                <Link href={`/animes/${mediaSlug}/temporadas/adicionar`}>
                  <PlusCircleIcon />
                </Link>
              </div>

              {!collections.seasons.length && <p>Sem registros.</p>}

              <ul>
                {collections.seasons.map(
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
                          <span>
                            {status.acquired ? "Adquirido" : "Adquirir"}
                          </span>
                          <span>{status.consumed ? "Visto" : "Ver"}</span>
                        </div>
                      </div>

                      <div>
                        <Link href={`?tab=temporadas&n=${number}`}>
                          Episódios
                        </Link>

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
                                    <p>{`${epNumber} - ${epTitle}.`}</p>

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

              {!collections.ovas.length && <p>Sem registros.</p>}

              <ul>
                {collections.ovas.map(
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
                          <span>
                            {status.acquired ? "Adquirido" : "Adquirir"}
                          </span>
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
                                    <p>{`${epNumber} - ${epTitle}.`}</p>

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

              {!collections.specials.length && <p>Sem registros.</p>}

              <ul>
                {collections.specials.map(
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
                          <span>
                            {status.acquired ? "Adquirido" : "Adquirir"}
                          </span>
                          <span>{status.consumed ? "Visto" : "Ver"}</span>
                        </div>
                      </div>

                      <div>
                        <Link href={`?tab=especiais&n=${number}`}>
                          Episódios
                        </Link>

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
                                    <p>{`${epNumber} - ${epTitle}.`}</p>

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

          {tab === "personagens" && (
            <section>
              <h2>Personagens</h2>

              <Link href={`/personagens/adicionar?media=${id}`}>
                <PlusCircleIcon />
              </Link>

              {!characters.length && <p>Sem registros.</p>}

              <ul>
                {characters.map(
                  ({ id, url, avatar, name, codenames, status }) => (
                    <li key={id}>
                      <Link href={url}>
                        <Image
                          src={avatar.src}
                          alt={avatar.alt}
                          width={60}
                          height={60}
                        />

                        <div>
                          <strong>{name}</strong>
                          <p>
                            {codenames.map(({ label }) => label).join(", ")}
                          </p>
                          <div>
                            <DotIcon />
                            {status.label}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </section>
          )}

          {tab === "continuidade" && (
            <section>
              <h2>Continuidade</h2>

              <div>
                <h3>Anterior</h3>

                {continuity.previous && (
                  <article>
                    <Link href={continuity.previous.url}>
                      <Image
                        src={continuity.previous.cover.src}
                        alt={continuity.previous.cover.alt}
                        width={60}
                        height={60}
                      />

                      <h2>{continuity.previous.title}</h2>
                      <p>{continuity.previous.release.year}</p>
                    </Link>
                  </article>
                )}
              </div>

              <div>
                <h3>Sequência</h3>

                {continuity.next && (
                  <article>
                    <Link href={continuity.next.url}>
                      <Image
                        src={continuity.next.cover.src}
                        alt={continuity.next.cover.alt}
                        width={60}
                        height={60}
                      />

                      <h2>{continuity.next.title}</h2>
                      <p>{continuity.next.release.year}</p>
                    </Link>
                  </article>
                )}
              </div>
            </section>
          )}

          {tab === "galeria" && (
            <section>
              <h2>Galeria</h2>

              {gallery.map((image) => (
                <Image
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  width={60}
                  height={60}
                />
              ))}
            </section>
          )}

          {tab === "arquivos" && (
            <section>
              <h2>Arquivos</h2>

              <ul>
                {files.map((file) => (
                  <li key={file.id}>
                    <Link href={file.src}>
                      <FileIcon />
                      <span>{`${file.title} (${file.extension})`}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {tab === "franquias" && (
            <section>
              <h2>Franquias</h2>

              <div>
                <h3>Principal:</h3>

                <article>
                  <Link href={franchises.main.url}>
                    <Image
                      src={franchises.main.logo.src}
                      alt={franchises.main.logo.alt}
                      width={60}
                      height={60}
                    />
                  </Link>
                </article>
              </div>

              <div>
                <h3>Sub-Franquias:</h3>

                {franchises.subs.map((franchise) => (
                  <article key={franchise.id}>
                    <Link href={franchise.url}>
                      <Image
                        src={franchise.logo.src}
                        alt={franchise.logo.alt}
                        width={60}
                        height={60}
                      />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
