import React from 'react';

import ExampleDetails from '.';

export default function IframeApp(): React.ReactElement {
  const lastSlash = window.location.hash.lastIndexOf('/');
  const characterId = +window.location.hash.substring(lastSlash + 1);
  return (
    <ExampleDetails characterId={characterId} />
  );  
}
