"use client";

import { useActionState } from "react";
import Image from "next/image";
import type { ActionState } from "@/shared/types";
import { FormSubmitBtn } from "@/shared/components/ui";
import type { Attribute } from "@/modules/attribute";
import type { FranchiseDetails } from "@/modules/franchise/types";
import { createMediaAction } from "@/modules/media/actions";
import { MEDIA_TYPES_LIST } from "@/modules/media-type";
import type { MediaDetails } from "@/modules/media/types";

const initialActionState: ActionState = {
  success: false,
};

type Props = {
  themes: Attribute[];
  medias: MediaDetails[];
  franchises: FranchiseDetails[];
};

export function CreateMediaForm({ themes, medias, franchises }: Props) {
  const [state, formAction] = useActionState(
    createMediaAction,
    initialActionState,
  );

  return (
    <form action={formAction}>
      <fieldset>
        <legend>Detalhes</legend>

        <div>
          <label htmlFor="title">Título</label>
          <input id="title" name="title" type="text" required />
        </div>

        <div>
          <label htmlFor="translatedTitle">Título traduzido</label>
          <input id="translatedTitle" name="translatedTitle" type="text" />
        </div>

        <div>
          <label htmlFor="releaseDate">Lançamento</label>
          <input id="releaseDate" name="releaseDate" type="date" required />
        </div>

        <div>
          <label htmlFor="typeCode">Tipo</label>
          <select id="typeCode" name="typeCode" required>
            <option defaultValue="">Selecione</option>
            {MEDIA_TYPES_LIST.map(({ code, label }) => (
              <option value={code}>{label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="synopsis">Sinopse</label>
          <textarea id="synopsis" name="synopsis" required />
        </div>
      </fieldset>

      <fieldset>
        <legend>Arquivos</legend>

        <div>
          <label htmlFor="cover">Capa</label>
          <input type="file" id="cover" name="cover" required />
        </div>

        <div>
          <label htmlFor="trailer">Trailer</label>
          <input type="file" id="trailer" name="trailer" required />
        </div>

        <div>
          <label htmlFor="images">Imagens</label>
          <input type="file" id="images" name="images" multiple />
        </div>

        <div>
          <label htmlFor="files">Arquivos</label>
          <input type="file" id="files" name="files" multiple />
        </div>
      </fieldset>

      <fieldset>
        <legend>Tags</legend>

        <div>
          <label>Temáticas</label>
          {themes.map(({ id, label }) => (
            <label key={id}>
              <input type="checkbox" name="themeIds" value={id} />
              {label}
            </label>
          ))}
        </div>

        <div>
          <label htmlFor="franchiseID">Franquia</label>
          <select id="franchiseID" name="franchiseID" required>
            <option defaultValue="">Selecione</option>
            {franchises.map(({ id, title, logo }) => (
              <option value={id}>
                <Image src={logo.url} alt={logo.title} width={60} height={60} />
                {title}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Sequencia</legend>

        <div>
          <label htmlFor="nextId">Seguinte</label>
          <select id="nextId" name="nextId" defaultValue="">
            {medias.map(({ id, cover, title, releaseYear }) => (
              <option key={id} value={id}>
                <Image src={cover.url} alt={cover.alt} />
                {title}
                {releaseYear}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      {/* 

  
     

 

  seasons?: {
    id: string;
    number: number;
    title: string;
    releaseYear: number;
    resolution: string;
    language: string;
    synopsis: string;
    opening: { url: string };
    episodes: {
      id: string;
      number: number;
      title: string;
      userStatus: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  ovas?: {
    id: string;
    number: number;
    title: string;
    releaseYear: number;
    resolution: string;
    language: string;
    episodes: {
      id: string;
      number: number;
      title: string;
      userStatus: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  specials?: {
    id: string;
    number: number;
    title: string;
    releaseYear: number;
    resolution: string;
    language: string;
    episodes: {
      id: string;
      number: number;
      title: string;
      userStatus: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  edition?: {
    base: MediaDetails;
    expansions: MediaDetails[];
    dlcs: MediaDetails[];
  };

 
  };

  
  }[]; */}

      <FormSubmitBtn />
    </form>
  );
}
