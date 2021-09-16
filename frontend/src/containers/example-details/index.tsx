import React from 'react';

import { useCharacter } from '../../fetchers/example-fetcher';

interface ExampleDetailsProps {
  characterId: number;
}

export default function ExampleDetails(props: ExampleDetailsProps): React.ReactElement {
  const characterInfo = useCharacter(props.characterId);

  return (
    <>
      <h2>Example Details Container</h2>
      {characterInfo.isValidating ?(
        <p>Loading character...</p>
      ) : characterInfo.error && (
        <p>An error occurred: {characterInfo.error.message}</p>
      )}
      {characterInfo.data && (
        <div>
          <h2>{characterInfo.data.name}</h2>
          <img src={characterInfo.data.image} />
        </div>
      )}
    </>
  );
}