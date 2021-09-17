import React, { useState } from 'react';

import { useCharacters, Character } from '../../fetchers/example-fetcher';
import { createAndDispatchCustomEvent } from '../../utils';

interface ExampleSearchProps {
  namespace?: string;
  onSelectCharacter?: (character: Character) => void;
}

export default function ExampleSearch(props: ExampleSearchProps): React.ReactElement {
  const namespace = props.namespace || 'examplesearch';
  const [page, setPage] = useState(1);
  const characterInfo = useCharacters(page);

  const selectCharacterId = (character: Character) =>
    `${namespace}_character_${character.id}`;

  const onSelectCharacter = (character: Character) => () => {
    createAndDispatchCustomEvent({
      name: `${namespace}:onSelectCharacter`,
      selector: `#${selectCharacterId(character)}`,
      detail: { ...character },
    });
    if (props.onSelectCharacter) {
      props.onSelectCharacter(character);
    }
  };

  return (
    <>
      <h2>Example Search Container</h2>
      {characterInfo.isValidating ? (
        <p>Loading characters...</p>
      ): characterInfo.error && (
        <p>An error occurred: {characterInfo.error.message}</p>
      )}
      {characterInfo.data && (
        <ul>
          {characterInfo.data.map(character => (
            <li key={character.id}
              id={selectCharacterId(character)}
              onClick={onSelectCharacter(character)}
            >
              <a style={{ cursor: 'pointer' }}>{character.name}</a>
            </li>
          ))}
        </ul>
      )}
      <button disabled={page < 2} onClick={() => setPage(page - 1)}>Previous Characters</button>
      <button onClick={() => setPage(page + 1)}>Next Characters</button>
    </>
  );
}