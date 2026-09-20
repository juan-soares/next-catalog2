import Image from "next/image";
import Link from "next/link";

export async function MediaDetailsPage() {
  const trailer = "/video";
  const cover = "/cover";
  const title = "Teste";
  const translatedTitle = "";
  const releaseYear = "2024";
  const typeLabel = "Animes";
  const themes = [{ id: "1", label: "Aventura" }];
  const synopsis = "Lorem LoremLoremLoremLoremLorem";
  const acquired = false;
  const consumed = false;

  return (
    <div>
      <main>
        <div>
          <video autoPlay muted loop playsInline>
            <source src={trailer} type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>

        <div>
          <div>
            <Image src={cover} alt={`Capa de ${title}.`} />
          </div>

          <div>
            <h1>{title}</h1>

            <p>
              {releaseYear} | {typeLabel}
            </p>

            <ul>
              {themes.map(({ id, label }) => (
                <li key={id}>{label}</li>
              ))}
            </ul>

            <p>{synopsis}</p>

            <div>
              <button>{acquired ? "Adquirido" : "Adquirir"}</button>
              <button>{consumed ? "Consumido" : "Consumir"}</button>
            </div>
          </div>
        </div>
      </main>

      <div>
        <nav>
          <Link href="tab=info">Ficha Técnica</Link>
          <Link href="tab=seasons">Temporadas</Link>
          <Link href="tab=ovas">OVAS</Link>
          <Link href="tab=specials">Especiais</Link>
          <Link href="tab=specials">Galeria</Link>
          <Link href="tab=specials">Arquivos</Link>
          <Link href="tab=specials">Continuidade</Link>
          <Link href="tab=specials">Franquias</Link>
        </nav>

        <main>
          <p>Título: {title}</p>
          <p>Título Traduzido: {translatedTitle}</p>
          <p>Laçamento: {translatedTitle}</p>
        </main>
      </div>
    </div>
  );
}
