import useSWR from 'swr';

import { backendUrl } from '../config';
import { fetchJson } from './fetch-json';
import SwrInfo from './swr-info';

export interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
}

interface CharactersResponse {
  characters: Character[];
}

export function useCharacters(page = 1): SwrInfo<Character[]> {
  return useSWR(`${backendUrl}/api/example/characters?page=${page}`, async (url: string) => {
    const { characters } = await fetchJson<CharactersResponse>(url);
    return characters;
  });
}

interface CharacterResponse {
  character: Character;
}

export function useCharacter(id = 1): SwrInfo<Character> {
  return useSWR(`${backendUrl}/api/example/characters/${id}`, async (url: string) => {
    const { character } = await fetchJson<CharacterResponse>(url);
    return character;
  });
}

export default {
  useCharacters,
  useCharacter,
};
