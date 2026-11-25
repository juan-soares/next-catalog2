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
      | "albuns"
      | "shows"
      | "avulsas"
      | "personagens"
      | "continuidade"
      | "galeria"
      | "arquivos";
    n?: string;
  }>;
};

export default async function MusicPage({ searchParams }: Props) {
  const mediaSlug = "ariana-grande-2000-aaa";
  const { tab, n } = await searchParams;

  const currentNumber = n ? Number(n) : null;

  const midia = {
    id: "asasbasa",
    slug: "ariana-grande-2000-aHad",
    url: "/musicas/ariana-grande-2000-aHad",

    info: {
      title: "Ariana Grande",
      translatedTitle: "",

      release: {
        date: "01/10/2026",
        year: 2026,
      },

      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae dolor distinctio a aut ipsa asperiores error, in, accusantium libero ullam. Odio ut, laborum quidem ab beatae aperiam delectus cumque!",

      cover: {
        src: "/assets/medias/ariana-grande-2000-aHad/cover.jpg",
        alt: "Capa do artista Ariana Grande.",
      },
      trailer: {
        src: "/assets/medias/ariana-grande-2000-aHad/trailer.mp4",
        type: "video/mp4",
      },
    },

    attributes: {
      languages: [{ id: "asasa", label: "Português" }],
      genres: [{ id: "asasasas", label: "Pop" }],
      gameplays: [],
      modes: [],
      themes: [
        { id: "asbRaasa", label: "Romance" },
        { id: "asasa", label: "Dinheiro" },
      ],
    },

    collections: {
      albums: [
        {
          id: "aBakxs",
          number: 1,
          title: "",
          releaseYear: 2020,
          languages: [{ id: "akskas", label: "Português" }],
          resolutions: [{ id: "akskas", label: "100k" }],
          cover: {
            url: "/assets/medias/ariana-grande-2000-anime-aaa/cover-album1.jpg",
            alt: "Capa do album 1.",
          },
          synopsis:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ullam sequi et hic perferendis quod, consequatur, earum aut officia, laborum in voluptate soluta nam odit facere fuga tempora quos dolor!",
          status: {
            acquired: false,
            consumed: false,
          },
          tracks: [
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
      concerts: [
        {
          id: "aBakxs",
          number: 1,
          title: "",
          releaseYear: 2020,
          languages: [{ id: "akskas", label: "Português" }],
          resolutions: [{ id: "akskas", label: "1080p" }],
          cover: {
            url: "/assets/medias/ariana-grande-2000-anime-aaa/cover-concert1.jpg",
            alt: "Capa do show 1",
          },
          synopsis:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ullam sequi et hic perferendis quod, consequatur, earum aut officia, laborum in voluptate soluta nam odit facere fuga tempora quos dolor!",
          status: {
            acquired: false,
            consumed: false,
          },
          tracks: [
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
      singles: [],
    },

    characters: [
      {
        id: "asasax",
        url: "/personagens/ariana-grande-universe-3312",
        name: "Ariana Grande",
        codenames: [],
        avatar: {
          src: "/assets/characters/ariana-grande-3312.png",
          alt: "Avatar do personagem Ariana Grande.",
        },
        status: { id: "acE", label: "Ativo" },
      },
    ],

    continuity: {
      previous: null,
      next: null,
    },

    gallery: [
      {
        id: "aslasoas",
        src: "/assets/medias/ariana-grande-2000-aHad/gallery-1.jpg",
        alt: "Imagem 1 do artista Ariana Grande.",
      },
      {
        id: "aslzzsoas",
        src: "/assets/medias/ariana-grande-2000-aHad/gallery-2.jpg",
        alt: "Imagem 2 do artista Ariana Grande.",
      },
      {
        id: "asEEas",
        src: "/assets/medias/ariana-grande-2000-aHad/gallery-3.jpg",
        alt: "Imagem 3 do artista Ariana Grande.",
      },
    ],

    files: [],

    franchises: null,

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
          <Link href="?tab=albuns">Albuns</Link>
          <Link href="?tab=shows">Shows</Link>
          <Link href="?tab=avulsas">Avulsas</Link>
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

          {tab === "albuns" && (
            <section>
              <div>
                <h2>Albuns</h2>

                <Link href={`/musicas/${mediaSlug}/albuns/adicionar`}>
                  <PlusCircleIcon />
                </Link>
              </div>

              {!collections.albums.length && <p>Sem registros.</p>}

              <ul>
                {collections.albums.map(
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
                    tracks,
                  }) => (
                    <li key={id}>
                      <Image
                        src={cover.url}
                        alt={cover.alt}
                        width={60}
                        height={60}
                      />

                      <div>
                        <h3>{`(${releaseYear}) ${title && `: ${title}`}`}</h3>

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
                          <span>{status.consumed ? "Ouvido" : "Ouvir"}</span>
                        </div>
                      </div>

                      <div>
                        <Link href={`?tab=albuns&n=${number}`}>Faixas</Link>

                        {currentNumber === number && (
                          <div>
                            <Link
                              href={`/musicas/${mediaSlug}/albuns/${id}/faixas/adicionar`}
                            >
                              <PlusCircleIcon />
                            </Link>

                            {!tracks.length && <p>Sem registros.</p>}

                            <ul>
                              {tracks.map(
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
                                        {epStatus.consumed ? "Ouvido" : "Ouvir"}
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
          {tab === "shows" && (
            <section>
              <div>
                <h2>Shows</h2>

                <Link href={`/musicas/${mediaSlug}/shows/adicionar`}>
                  <PlusCircleIcon />
                </Link>
              </div>

              {!collections.concerts.length && <p>Sem registros.</p>}

              <ul>
                {collections.concerts.map(
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
                    tracks,
                  }) => (
                    <li key={id}>
                      <Image
                        src={cover.url}
                        alt={cover.alt}
                        width={60}
                        height={60}
                      />

                      <div>
                        <h3>{`(${releaseYear}) ${title && `: ${title}`}`}</h3>

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
                          <span>{status.consumed ? "Ouvido" : "Ouvir"}</span>
                        </div>
                      </div>

                      <div>
                        <Link href={`?tab=shows&n=${number}`}>Faixas</Link>

                        {currentNumber === number && (
                          <div>
                            <Link
                              href={`/musicas/${mediaSlug}/shows/${id}/faixas/adicionar`}
                            >
                              <PlusCircleIcon />
                            </Link>

                            {!tracks.length && <p>Sem registros.</p>}

                            <ul>
                              {tracks.map(
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
                                        {epStatus.consumed ? "Ouvido" : "Ouvir"}
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
          {tab === "avulsas" && (
            <section>
              <div>
                <h2>Avulsas</h2>

                <Link href={`/musicas/${mediaSlug}/avulsas/adicionar`}>
                  <PlusCircleIcon />
                </Link>
              </div>

              {!collections.singles.length && <p>Sem registros.</p>}

              <ul>
                {collections.singles.map(
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
                    tracks,
                  }) => (
                    <li key={id}>
                      <Image
                        src={cover.url}
                        alt={cover.alt}
                        width={60}
                        height={60}
                      />

                      <div>
                        <h3>{`(${releaseYear}) ${title && `: ${title}`}`}</h3>

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
                          <span>{status.consumed ? "Ouvido" : "Ouvir"}</span>
                        </div>
                      </div>

                      <div>
                        <Link href={`?tab=avulsas&n=${number}`}>Faixas</Link>

                        {currentNumber === number && (
                          <div>
                            <Link
                              href={`/musicas/${mediaSlug}/avulsas/${id}/faixas/adicionar`}
                            >
                              <PlusCircleIcon />
                            </Link>

                            {!tracks.length && <p>Sem registros.</p>}

                            <ul>
                              {tracks.map(
                                ({
                                  id,
                                  number: tNumber,
                                  title: tTitle,
                                  status: tStatus,
                                }) => (
                                  <li key={id}>
                                    <p>{`${tNumber} - ${tTitle}.`}</p>

                                    <div>
                                      <button>
                                        {tStatus.acquired
                                          ? "Adquirido"
                                          : "Adquirir"}
                                      </button>
                                      <button>
                                        {tStatus.consumed ? "Ouvido" : "Ver"}
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
        </main>
      </div>
    </div>
  );
}
