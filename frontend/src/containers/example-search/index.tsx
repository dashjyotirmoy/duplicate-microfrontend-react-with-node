import React, { useState } from 'react';

import { useCharacters, Character } from '../../fetchers/example-fetcher';

interface ExampleSearchProps {
  onSelectCharacter?: (character: Character) => void;
}

export default function ExampleSearch(props: ExampleSearchProps): React.ReactElement {
  const [page, setPage] = useState(1);
  const characterInfo = useCharacters(page);

  const onSelectCharacter = (character: Character) => () => {
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