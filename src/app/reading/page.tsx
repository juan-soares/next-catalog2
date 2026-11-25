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
      | "hqs"
      | "anuais"
      | "especiais"
      | "personagens"
      | "continuidade"
      | "galeria"
      | "arquivos"
      | "franquias";
    n?: string;
  }>;
};

export default async function ComicPage({ searchParams }: Props) {
  const mediaSlug = "avengers-vol1-1999-aaa";
  const { tab } = await searchParams;

  const midia = {
    id: "asasbasa",
    slug: "avengers-vol1-1999-aHad",
    url: "/comics/avengers-vol1-1999-aHad",

    info: {
      title: "Avengers Vol 1",
      translatedTitle: "Vingadores v1",

      release: {
        date: "01/10/2026",
        year: 2026,
      },

      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aspernatur at ea voluptas libero nostrum dolorem, cumque illum, quas voluptate nihil doloremque ducimus cum sed suscipit tempore eaque sunt consequuntur.",

      cover: {
        src: "/assets/medias/avengers-vol1-1999-aHad/cover.jpg",
        alt: "Capa do comic Avengers Vol 1.",
      },
      trailer: null,
    },

    attributes: {
      languages: [{ id: "asasa", label: "Português" }],
      genres: [{ id: "asasasas", label: "Ação" }],
      gameplays: [],
      modes: [],
      themes: [{ id: "asbRaasa", label: "Super-Heróis" }],
    },

    collections: {
      issues: [
        {
          id: "aBakxs",
          number: 1,
          title: "ASSEMBLE!",
          release: {
            date: "2020-01-20",
            year: 2020,
          },
          languages: [{ id: "akskas", label: "Português" }],
          resolutions: [{ id: "akskas", label: "HD" }],
          cover: {
            url: "/assets/medias/avengers-vol1-1999-anime-aaa/cover-issue1.jpg",
            alt: "Capa da HQ 1.",
          },
          synopsis:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ullam sequi et hic perferendis quod, consequatur, earum aut officia, laborum in voluptate soluta nam odit facere fuga tempora quos dolor!",
          status: {
            acquired: false,
            consumed: false,
          },
        },
      ],

      annuals: [
        {
          id: "aBakxs",
          number: 1,
          title: "ASSEMBLE!",
          release: {
            date: "2020-01-20",
            year: 2020,
          },
          languages: [{ id: "akskas", label: "Português" }],
          resolutions: [{ id: "akskas", label: "HD" }],
          cover: {
            url: "/assets/medias/avengers-vol1-1999-anime-aaa/cover-annual1.jpg",
            alt: "Capa da HQ Anual 1.",
          },
          synopsis:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ullam sequi et hic perferendis quod, consequatur, earum aut officia, laborum in voluptate soluta nam odit facere fuga tempora quos dolor!",
          status: {
            acquired: false,
            consumed: false,
          },
        },
      ],

      specials: [],
    },

    characters: [
      {
        id: "asasax",
        url: "/personagens/steve-rogers-universe-3312",
        name: "Steve Rogers",
        codenames: [{ id: "asasa", label: "Capitão América" }],
        avatar: {
          src: "/assets/characters/steve-rogers-universe-3312.png",
          alt: "Avatar do personagem Steve Rogers.",
        },
        status: { id: "acE", label: "Ativo" },
      },
    ],

    continuity: {
      previous: null,
      next: {
        id: "akassakska",
        url: "/comics/avengers-vol2-2000-asres",
        cover: {
          src: "/assets/media/avengers-vol2-2000-asres/cover.jpg",
          alt: "Capa do comic Avengers Vol 2.",
        },
        title: "Avengers Vol 2",
        release: { year: 2000 },
      },
    },

    gallery: [
      {
        id: "aslasoas",
        src: "/assets/medias/avengers-vol1-1999-aHad/gallery-1.jpg",
        alt: "Imagem 1 do anime Naruto.",
      },
      {
        id: "aslzzsoas",
        src: "/assets/medias/avengers-vol1-1999-aHad/gallery-2.jpg",
        alt: "Imagem 2 do anime Naruto.",
      },
      {
        id: "asEEas",
        src: "/assets/medias/avengers-vol1-1999-aHad/gallery-3.jpg",
        alt: "Imagem 3 do anime Naruto.",
      },
    ],

    files: [
      {
        id: "asat",
        title: "Manual de Regras",
        src: "/assets/medias/avengers-vol1-1999-aHad/manual-de-regras.pdf",
        extension: "pdf",
      },
    ],

    franchises: {
      main: {
        id: "312asase",
        title: "Marvel",
        url: "/franchises/marvel-ff198",
        logo: {
          src: "/assets/franchises/marvel-ff198/logo.png",
          alt: "Logotipo da franquia Marvel",
        },
      },

      subs: [
        {
          id: "312asase",
          title: "Marvel Comics",
          url: "/franchises/marvel-comics-1990-ff198",
          logo: {
            src: "/assets/franchises//marvel-comics-1990-ff198.png",
            alt: "Logotipo da franquia Marvel Comics.",
          },
        },

        {
          id: "312asase",
          title: "Avengers Comics",
          url: "/franchises/avengers-comics-1990-ff198",
          logo: {
            src: "/assets/franchises/avengers-comics-1990-ff198.png",
            alt: "Logotipo da franquia Avengers Comics.",
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
            {info.trailer && (
              <video autoPlay loop muted playsInline>
                <source src={info.trailer.src} type={info.trailer.type} />
              </video>
            )}
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
          <Link href="?tab=hqs">HQS</Link>
          <Link href="?tab=anuais">Anuais</Link>
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

          {tab === "hqs" && (
            <section>
              <div>
                <h2>HQS</h2>

                <Link href={`/comics/${mediaSlug}/hqs/adicionar`}>
                  <PlusCircleIcon />
                </Link>
              </div>

              {!collections.issues.length && <p>Sem registros.</p>}

              <ul>
                {collections.issues.map(
                  ({
                    id,
                    number,
                    title,
                    release,
                    languages,
                    resolutions,
                    cover,
                    synopsis,
                    status,
                  }) => (
                    <li key={id}>
                      <Image
                        src={cover.url}
                        alt={cover.alt}
                        width={60}
                        height={60}
                      />

                      <div>
                        <h3>{`(${release.year}) ${title} #${number} ${title && `: ${title}`}`}</h3>

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
                          <span>{status.consumed ? "Lido" : "Ler"}</span>
                        </div>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </section>
          )}

          {tab === "anuais" && (
            <section>
              <div>
                <h2>Anuais</h2>

                <Link href={`/comics/${mediaSlug}/anuais/adicionar`}>
                  <PlusCircleIcon />
                </Link>
              </div>

              {!collections.annuals.length && <p>Sem registros.</p>}

              <ul>
                {collections.annuals.map(
                  ({
                    id,
                    number,
                    title,
                    release,
                    languages,
                    resolutions,
                    cover,
                    synopsis,
                    status,
                  }) => (
                    <li key={id}>
                      <Image
                        src={cover.url}
                        alt={cover.alt}
                        width={60}
                        height={60}
                      />

                      <div>
                        <h3>{`(${release.year}) ${title} Anual #${number} ${title && `: ${title}`}`}</h3>

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
                          <span>{status.consumed ? "Lido" : "Ler"}</span>
                        </div>
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

                <Link href={`/comics/${mediaSlug}/especiais/adicionar`}>
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
                    release,
                    languages,
                    resolutions,
                    cover,
                    synopsis,
                    status,
                  }) => (
                    <li key={id}>
                      <Image
                        src={cover.url}
                        alt={cover.alt}
                        width={60}
                        height={60}
                      />

                      <div>
                        <h3>{`(${release.year}) ${title} #${number} ${title && `: ${title}`}`}</h3>

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
                          <span>{status.consumed ? "Lido" : "Ler"}</span>
                        </div>
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
