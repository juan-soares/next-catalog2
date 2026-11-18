import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { PUBLIC_URLS } from "@/shared/consts";
import type { AttributeView } from "@/modules/attribute/types";

type Props = {
  platforms: AttributeView[];
  genres: AttributeView[];
  gameplays: AttributeView[];
  modes: AttributeView[];
};

export function GameAttributesFields({
  platforms,
  genres,
  gameplays,
  modes,
}: Props) {
  return (
    <fieldset>
      <legend>Detalhes de Jogos</legend>
      <div>
        <label>Plataformas</label>
        <Link href={`${PUBLIC_URLS.ATTRIBUTES.CREATE}?type=platform`}>
          <PlusCircle />
        </Link>
        {platforms.map(({ id, label }) => (
          <label htmlFor={id} key={id}>
            <input id={id} type="checkbox" name="platformIds" value={id} />
            {label}
          </label>
        ))}
      </div>
      <div>
        <label>Gêneros</label>
        <Link href={`${PUBLIC_URLS.ATTRIBUTES.CREATE}?type=genre`}>
          <PlusCircle />
        </Link>
        {genres.map(({ id, label }) => (
          <label htmlFor={id} key={id}>
            <input id={id} type="checkbox" name="genreIds" value={id} />
            {label}
          </label>
        ))}
      </div>
      <div>
        <label>Gameplays</label>
        <Link href={`${PUBLIC_URLS.ATTRIBUTES.CREATE}?type=gameplay`}>
          <PlusCircle />
        </Link>
        {gameplays.map(({ id, label }) => (
          <label htmlFor={id} key={id}>
            <input id={id} type="checkbox" name="gameplayIds" value={id} />
            {label}
          </label>
        ))}
      </div>
      <div>
        <label>Modos</label>
        <Link href={`${PUBLIC_URLS.ATTRIBUTES.CREATE}?type=mode`}>
          <PlusCircle />
        </Link>
        {modes.map(({ id, label }) => (
          <label htmlFor={id} key={id}>
            <input id={id} type="checkbox" name="modeIds" value={id} />
            {label}
          </label>
        ))}
      </div>
      <div>
        <label>Jogadores</label>

        <div>
          <label htmlFor="playersMin">Min:</label>
          <input
            type="number"
            id="playersMin"
            name="playersMin"
            min={1}
            defaultValue="1"
            required
          />
        </div>

        <div>
          <label htmlFor="playersMax">Max:</label>
          <input
            type="number"
            id="playersMax"
            name="playersMax"
            min={1}
            defaultValue="1"
            required
          />
        </div>
      </div>
    </fieldset>
  );
}
