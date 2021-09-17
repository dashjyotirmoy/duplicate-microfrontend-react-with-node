import React from 'react';

import { Character } from '../../fetchers/example-fetcher';
import ExampleSearch from '.';

const messageName = 'examplesearch';

export default function IframeApp(): React.ReactElement {
  const onSelectCharacter = (character: Character) =>
    window.parent.postMessage({ messageName, character }, '*');

  return (
    <ExampleSearch onSelectCharacter={onSelectCharacter} />
  );  
}
