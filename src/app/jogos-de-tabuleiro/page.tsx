import {
  CalendarDays,
  Gamepad2Icon,
  GlobeIcon,
  Joystick,
  Languages,
  LanguagesIcon,
  Tag,
  TagsIcon,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    },

    attributes: {
      languages: ["Português"],
      genres: ["Dungeon Crown", "RPG Tático"],
      gameplays: ["Tabuleiro"],
      modes: ["Campanha Solo", "Campanha Co-Op", "Partida Vs."],
      themes: ["RPG Fantasia", "Sombrio"],
    },

    assets: {
      cover: {
        src: "/assets/medias/dungeons-of-tanares-2026-ff185f/cover.jpg",
        alt: "Capa do jogo de tabuleiro Dungeons of Tanares.",
      },
      trailer: {
        src: "/assets/medias/dungeons-of-tanares-2026-ff185f/trailer.mp4",
        type: "video/mp4",
      },
    },

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

  const { assets, info, attributes, franchises, status } = midia;

  return (
    <div>
      <header>
        <div>
          <video autoPlay loop muted playsInline>
            <source src={assets.trailer.src} type={assets.trailer.type} />
          </video>
        </div>

        <div>
          <Image
            src={assets.cover.src}
            alt={assets.cover.alt}
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
              <LanguagesIcon />
              {attributes.languages.join(", ")}
            </div>

            <div>
              <Gamepad2Icon />
              {attributes.genres.join(", ")}
            </div>

            <div>
              <TagsIcon />
              {attributes.themes.join(", ")}
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
        <button>Informações</button>
        <button>Expansões</button>
        <button>Galeria</button>
        <button>Arquivos</button>
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
                <Languages /> Idiomas:
              </dt>
              <dd>{attributes.languages.join(", ")}</dd>
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
              <dd>{attributes.modes.join(", ")}</dd>
            </div>
            <div>
              <dt>
                <Joystick /> Gameplays:
              </dt>
              <dd>{attributes.gameplays.join(", ")}</dd>
            </div>
            <div>
              <dt>
                <Gamepad2Icon /> Gêneros:
              </dt>
              <dd>{attributes.genres.join(", ")}</dd>
            </div>
            <div>
              <dt>
                <TagsIcon /> Temáticas:
              </dt>
              <dd>{attributes.themes.join(", ")}</dd>
            </div>
          </dl>
        </section>
      </main>
    </div>
  );
}
