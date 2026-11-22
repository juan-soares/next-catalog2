import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Gamepad2Icon,
  Layers,
  Joystick,
  Languages,
  LanguagesIcon,
  Tag,
  TagsIcon,
  Users,
} from "lucide-react";

export default function BoardGamePage() {
  const midia = {
    info: {
      title: "Dungeons of Tanares",
      translatedTitle: "",
      releaseYear: 2026,
      releaseDate: "01/10/2026",
      synopsis:
        "Tanares is a narrative dungeon crawler for 1-4 players, where you explore a living world, build a powerful hero, and adapt to unpredictable enemies.",

      players: {
        min: 1,
        max: 4,
      },

      cover: {
        src: "/assets/medias/dungeons-of-tanares-2026-ff185f/cover.jpg",
        alt: "Capa do jogo de tabuleiro Dungeons of Tanares.",
      },
      trailer: {
        src: "/assets/medias/dungeons-of-tanares-2026-ff185f/trailer.mp4",
        type: "video/mp4",
      },
    },

    attributes: {
      languages: [{ id: "asasa", label: "Português" }],
      genres: [
        { id: "asasasas", label: "Dungeon Crown" },
        { id: "aCCssasa", label: "RPG Tático" },
      ],
      gameplays: [{ id: "asasa", label: "Tabuleiro" }],
      modes: [
        { id: "asasa", label: "Campanha Solo" },
        { id: "asasVVa", label: "Campanha Co-Op" },
        { id: "asBBsasa", label: "Partida Vs." },
      ],
      themes: [
        { id: "asbRaasa", label: "RPG Fantasia" },
        { id: "asasa", label: "Sombrio" },
      ],
    },

    edition: {
      type: { id: "Easasa", label: "Expansão" },
      base: {
        id: "aksakska",
        path: "/jogos-de-tabuleiro/tanares-rise-of-tanares-2026-asres",
        cover: {
          src: "/assets/media/tanares-rise-of-dragons-2026-asres/cover.jpg",
          alt: "Capa do jogo de tabuleiro Tanares: Rise of Dragons",
        },
        title: "Tanares: Rise of Dragons",
        releaseYear: 2026,
      },
      dlcs: [],
      expansions: [],
    },

    gallery: [
      {
        id: "aslasoas",
        src: "/assets/medias/dungeons-of-tanares-2026-ff185f/gallery-1.jpg",
        alt: "Imagem jogo de tabuleiro Dungeons of Tanares.",
      },
      {
        id: "aslzzsoas",
        src: "/assets/medias/dungeons-of-tanares-2026-ff185f/gallery-2.jpg",
        alt: "Imagem jogo de tabuleiro Dungeons of Tanares.",
      },
      {
        id: "asEEas",
        src: "/assets/medias/dungeons-of-tanares-2026-ff185f/gallery-3.jpg",
        alt: "Imagem jogo de tabuleiro Dungeons of Tanares.",
      },
    ],

    files: [],

    franchises: {
      main: {
        id: "312asase",
        title: "Dungeons of Tanares",
        slug: "dungeons-of-tanares-2026-ff198",
        logo: {
          src: "/assets/franchises/dungeons-of-tanares-2026-ff198/logo.png",
          alt: "Logotipo da franquia Dungeons of Tanares",
        },
      },

      subs: [],
    },

    status: {
      acquired: false,
      consumed: false,
    },
  };

  const { info, attributes, edition, gallery, files, franchises, status } =
    midia;

  return (
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
              {info.title} <span>{`(${info.releaseYear})`}</span>
            </h1>
            <h2>{info.translatedTitle}</h2>
          </div>

          <div>
            <p>{info.synopsis}</p>
          </div>

          <div>
            <div>
              <Layers />
              {edition.type.label}
            </div>

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
            <Link href={`/franquias/${franchises.main.slug}`}>
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
        <button>Informações</button>
        <button>Edições</button>
        <button>Franquias</button>
      </nav>

      <main>
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
              <dd>{info.releaseDate}</dd>
            </div>
            <div>
              <dt>
                <Layers /> Edição:
              </dt>
              <dd>{edition.type.label}</dd>
            </div>
            <div>
              <dt>
                <Languages /> Idiomas:
              </dt>
              <dd>
                {attributes.languages.map(({ label }) => label).join(", ")}
              </dd>
            </div>
            <div>
              <dt>
                <Users /> Jogadores:
              </dt>
              <dd>{`${info.players.min} - ${info.players.max}`}</dd>
            </div>
            <div>
              <dt>
                <Users /> Modos:
              </dt>
              <dd>{attributes.modes.map(({ label }) => label).join(", ")}</dd>
            </div>
            <div>
              <dt>
                <Joystick /> Gameplays:
              </dt>
              <dd>
                {attributes.gameplays.map(({ label }) => label).join(", ")}
              </dd>
            </div>
            <div>
              <dt>
                <Gamepad2Icon /> Gêneros:
              </dt>
              <dd>{attributes.genres.map(({ label }) => label).join(", ")}</dd>
            </div>
            <div>
              <dt>
                <TagsIcon /> Temáticas:
              </dt>
              <dd>{attributes.themes.map(({ label }) => label).join(", ")}</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2>Edições</h2>

          {edition.base && (
            <div>
              <h3>Base</h3>

              <article>
                <Link href={edition.base.path}>
                  <Image
                    src={edition.base.cover.src}
                    alt={edition.base.cover.alt}
                    width={60}
                    height={60}
                  />

                  <h2>{edition.base.title}</h2>
                  <p>{edition.base.releaseYear}</p>
                </Link>
              </article>
            </div>
          )}

          {!edition.base && (
            <>
              <div>
                <h3>Expansões</h3>

                {edition.expansions.map((media) => (
                  <article key={media.id}>
                    <Link href={media.path}>
                      <Image
                        src={media.cover.src}
                        alt={media.cover.alt}
                        width={60}
                        height={60}
                      />

                      <h2>{media.title}</h2>
                      <p>{media.releaseYear}</p>
                    </Link>
                  </article>
                ))}
              </div>

              <div>
                <h3>DLCs</h3>

                {edition.expansions.map((media) => (
                  <article key={media.id}>
                    <Link href={media.path}>
                      <Image
                        src={media.cover.src}
                        alt={media.cover.alt}
                        width={60}
                        height={60}
                      />

                      <h2>{edition.base.title}</h2>
                      <p>{edition.base.releaseYear}</p>
                    </Link>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

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

        <section>
          <h2>Arquivos</h2>

          {files.map((file) => (
            <li key={file.id}>
              <Link>Do</Link>
            </li>
          ))}
        </section>

        <section>
          <h2>Franquias</h2>

          <div>
            <h3>Principal:</h3>

            <article>
              <Link href={`/franquias/${franchises.main.slug}`}>
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
                <Link href={`/franquias/${franchise.slug}`}>
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
      </main>
    </div>
  );
}
