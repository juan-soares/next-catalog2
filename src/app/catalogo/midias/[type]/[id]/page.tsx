import Link from "next/link";

const mediaDetailsMock = {
  id: "1",

  title: "Era uma vez",
  translatedTitle: "Once Upon a Time",

  releaseYear: 2024,

  type: {
    id: "anime",
    label: "Anime",
  },

  cover: {
    url: "/images/cover.jpg",
    alt: "Capa de Era uma vez",
  },

  trailer: {
    url: "/videos/trailer.mp4",
  },

  synopsis:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci vel velit consequat tincidunt.",

  themes: [
    {
      id: "1",
      label: "Aventura",
    },
    {
      id: "2",
      label: "Fantasia",
    },
    {
      id: "3",
      label: "Ação",
    },
  ],

  userStatus: {
    acquired: false,
    consumed: false,
  },

  edition: null,

  seasons: [
    {
      id: "season-1",
      number: 1,
      title: "Era uma vez",
      releaseYear: 2024,

      versions: [
        {
          id: "version-1",
          resolution: "1080p",
          language: "pt-BR",

          episodes: [
            {
              id: "episode-1",
              number: 1,
              title: "Era agora.",
              userStatus: {
                acquired: false,
                consumed: true,
              },
            },
            {
              id: "episode-2",
              number: 2,
              title: "O começo.",
              userStatus: {
                acquired: false,
                consumed: false,
              },
            },
          ],
        },
        {
          id: "version-2",
          resolution: "720p",
          language: "pt-BR",

          episodes: [
            {
              id: "episode-1-720",
              number: 1,
              title: "Era agora.",
              userStatus: {
                acquired: false,
                consumed: false,
              },
            },
          ],
        },
      ],
    },
  ],

  gallery: [
    {
      id: "gallery-1",
      title: "Imagem promocional",
      thumbnailUrl: "/images/gallery/thumb-1.jpg",
      imageUrl: "/images/gallery/1.jpg",
    },
    {
      id: "gallery-2",
      title: "Personagem principal",
      thumbnailUrl: "/images/gallery/thumb-2.jpg",
      imageUrl: "/images/gallery/2.jpg",
    },
  ],

  files: [
    {
      id: "file-1",
      name: "Plano da obra",
      size: 125829120,
      sizeLabel: "120 MB",
      extension: "pdf",
      mimeType: "application/pdf",
      downloadUrl: "/downloads/plano.pdf",
    },
    {
      id: "file-2",
      name: "Informações adicionais",
      size: 5242880,
      sizeLabel: "5 MB",
      extension: "pdf",
      mimeType: "application/pdf",
      downloadUrl: "/downloads/informacoes.pdf",
    },
  ],

  continuity: {
    previous: {
      id: "previous-1",
      title: "Era uma vez: O começo",
      releaseYear: 2023,
      cover: {
        url: "/images/previous.jpg",
        alt: "Capa de Era uma vez: O começo",
      },
    },

    next: {
      id: "next-1",
      title: "Era uma vez: O futuro",
      releaseYear: 2025,
      cover: {
        url: "/images/next.jpg",
        alt: "Capa de Era uma vez: O futuro",
      },
    },
  },

  franchises: [
    {
      id: "franchise-1",
      title: "Minha Franquia",
      logo: {
        url: "/images/franchise.jpg",
        alt: "Logo da Minha Franquia",
      },
    },
  ],
} as const;

const getMediaDetailsById = (id: string) => mediaDetailsMock;

async function MediaDetailsPage({ id }: { id: string }) {
  const media = getMediaDetailsById(id);

  function MediaHero({ media }: { media: typeof mediaDetailsMock }) {
    const {
      title,
      releaseYear,
      type,
      themes,
      synopsis,
      cover,
      trailer,
      userStatus,
    } = media;

    return (
      <main>
        {trailer && (
          <div>
            <video autoPlay muted loop playsInline preload="metadata">
              <source src={trailer.url} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
        )}

        <div>
          <div>
            <Image
              src={cover.url}
              alt={cover.alt}
              width={300}
              height={450}
              priority
            />
          </div>

          <div>
            <h1>{title}</h1>

            <p>
              {releaseYear} | {type.label}
            </p>

            {themes.length > 0 && (
              <ul>
                {themes.map((theme) => (
                  <li key={theme.id}>{theme.label}</li>
                ))}
              </ul>
            )}

            {synopsis && <p>{synopsis}</p>}

            <div>
              <button type="button">
                {userStatus.acquired ? "Adquirido" : "Adquirir"}
              </button>

              <button type="button">
                {userStatus.consumed ? "Consumido" : "Consumir"}
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
  function MediaNavigation() {
    return (
      <nav>
        <Link href="?tab=info">Ficha Técnica</Link>
        <Link href="?tab=seasons">Temporadas</Link>
        <Link href="?tab=ovas">OVAs</Link>
        <Link href="?tab=specials">Especiais</Link>
        <Link href="?tab=expansions">Expansões</Link>
        <Link href="?tab=gallery">Galeria</Link>
        <Link href="?tab=files">Arquivos</Link>
        <Link href="?tab=continuity">Continuidade</Link>
        <Link href="?tab=franchises">Franquias</Link>
      </nav>
    );
  }
  function MediaInformation({ media }: { media: typeof mediaDetailsMock }) {
    return (
      <section>
        <h2>Ficha Técnica</h2>

        <dl>
          <div>
            <dt>Título</dt>
            <dd>{media.title}</dd>
          </div>

          <div>
            <dt>Título traduzido</dt>
            <dd>{media.translatedTitle ?? "—"}</dd>
          </div>

          <div>
            <dt>Lançamento</dt>
            <dd>{media.releaseYear}</dd>
          </div>

          <div>
            <dt>Tipo</dt>
            <dd>{media.type.label}</dd>
          </div>

          <div>
            <dt>Temas</dt>
            <dd>
              {media.themes.length > 0
                ? media.themes.map((theme) => theme.label).join(", ")
                : "—"}
            </dd>
          </div>
        </dl>
      </section>
    );
  }
  function MediaSeasons({
    seasons,
  }: {
    seasons: typeof mediaDetailsMock.seasons;
  }) {
    return (
      <section>
        <h2>Temporadas</h2>

        {seasons.length === 0 && <p>Nenhuma temporada cadastrada.</p>}

        <ul>
          {seasons.map((season) => (
            <li key={season.id}>
              <article>
                <header>
                  <h3>
                    {season.number}ª Temporada: {season.title}
                  </h3>

                  <p>{season.releaseYear}</p>
                </header>

                {season.versions.map((version) => (
                  <section key={version.id}>
                    <header>
                      <h4>
                        {version.resolution} · {version.language}
                      </h4>
                    </header>

                    <ul>
                      {version.episodes.map((episode) => (
                        <li key={episode.id}>
                          <span>
                            EP.{episode.number}: {episode.title}
                          </span>

                          <span>
                            {episode.userStatus.acquired
                              ? "Adquirido"
                              : "Não adquirido"}
                          </span>

                          <span>
                            {episode.userStatus.consumed
                              ? "Consumido"
                              : "Não consumido"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </article>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  function MediaExpansions({
    edition,
  }: {
    edition: typeof mediaDetailsMock.edition;
  }) {
    return (
      <section>
        <h2>Expansões</h2>

        <div>
          {edition.base && (
            <article>
              <Link href={`/media/${edition.base.id}`}>
                <strong>Base</strong>

                <Image
                  src={edition.base.cover.url}
                  alt={edition.base.cover.alt}
                  width={80}
                  height={120}
                />

                <p>{edition.base.title}</p>

                <span>{edition.base.releaseYear}</span>
              </Link>
            </article>
          )}

          {edition.expansions.length > 0 && (
            <div>
              <h3>Expansões</h3>

              <ul>
                {edition.expansions.map((expansion) => (
                  <li key={expansion.id}>
                    <Link href={`/media/${expansion.id}`}>
                      <strong>Expansão</strong>

                      <Image
                        src={expansion.cover.url}
                        alt={expansion.cover.alt}
                        width={80}
                        height={120}
                      />

                      <p>{expansion.title}</p>

                      <span>{expansion.releaseYear}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {edition.dlcs.length > 0 && (
            <div>
              <h3>DLCs</h3>

              <ul>
                {edition.dlcs.map((dlc) => (
                  <li key={dlc.id}>
                    <Link href={`/media/${dlc.id}`}>
                      <strong>DLC</strong>

                      <Image
                        src={dlc.cover.url}
                        alt={dlc.cover.alt}
                        width={80}
                        height={120}
                      />

                      <p>{dlc.title}</p>

                      <span>{dlc.releaseYear}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    );
  }
  function MediaContinuity({
    continuity,
  }: {
    continuity: typeof mediaDetailsMock.continuity;
  }) {
    return (
      <section>
        <h2>Continuidade</h2>

        <div>
          {continuity.previous && (
            <Link href={`/media/${continuity.previous.id}`}>
              <strong>Anterior</strong>

              <Image
                src={continuity.previous.cover.url}
                alt={continuity.previous.cover.alt}
                width={80}
                height={120}
              />

              <p>{continuity.previous.title}</p>

              <span>{continuity.previous.releaseYear}</span>
            </Link>
          )}

          {continuity.next && (
            <Link href={`/media/${continuity.next.id}`}>
              <strong>Seguinte</strong>

              <Image
                src={continuity.next.cover.url}
                alt={continuity.next.cover.alt}
                width={80}
                height={120}
              />

              <p>{continuity.next.title}</p>

              <span>{continuity.next.releaseYear}</span>
            </Link>
          )}
        </div>
      </section>
    );
  }
  function MediaFiles({ files }: { files: typeof mediaDetailsMock.files }) {
    return (
      <section>
        <h2>Arquivos</h2>

        {files.length === 0 && <p>Nenhum arquivo disponível.</p>}

        <ul>
          {files.map((file) => (
            <li key={file.id}>
              <div>
                <File />
              </div>

              <div>
                <p>{file.name}</p>

                <p>
                  {file.extension.toUpperCase()} · {file.sizeLabel}
                </p>
              </div>

              <a
                href={file.downloadUrl}
                download
                aria-label={`Baixar ${file.name}`}
              >
                <Download />
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  function MediaGallery({
    gallery,
  }: {
    gallery: typeof mediaDetailsMock.gallery;
  }) {
    return (
      <section>
        <h2>Galeria</h2>

        {gallery.length === 0 && <p>Nenhuma imagem disponível.</p>}

        <ul>
          {gallery.map((item) => (
            <li key={item.id}>
              <Link href={item.imageUrl}>
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  width={200}
                  height={120}
                />

                <p>{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  function MediaFranchises({
    franchises,
  }: {
    franchises: typeof mediaDetailsMock.franchises;
  }) {
    return (
      <section>
        <h2>Franquias</h2>

        {franchises.length === 0 && <p>Nenhuma franquia relacionada.</p>}

        <ul>
          {franchises.map((franchise) => (
            <li key={franchise.id}>
              <Link href={`/franchises/${franchise.id}`}>
                <Image
                  src={franchise.logo.url}
                  alt={franchise.logo.alt}
                  width={100}
                  height={100}
                />

                <p>{franchise.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <div>
      <MediaHero media={media} />
      <MediaNavigation />
      <MediaInformation media={media} />
      <MediaSeasons seasons={media.seasons} />
      {media.edition && <MediaExpansions edition={media.edition} />}
      <MediaContinuity continuity={media.continuity} />
      <MediaFiles files={media.files} />
      <MediaGallery gallery={media.gallery} />
      <MediaFranchises franchises={media.franchises} />
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  return <MediaDetailsPage id={id} />;
}
