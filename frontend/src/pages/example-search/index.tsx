import React from 'react';
import { useHistory } from 'react-router-dom';

import ExampleSearch from '../../containers/example-search';
import { Character } from '../../fetchers/example-fetcher';

export default function ExampleSearchPage(): React.ReactElement {
  const history = useHistory();

  const onShowExampleHome = () => history.push('/');

  const onSelectCharacter = (character: Character) =>
    history.push(`/example-details/${character.id}`);

  return (
    <>
      <h1>Example Search Page</h1>
      <button onClick={onShowExampleHome}>Go to example home page</button>
      <ExampleSearch onSelectCharacter={onSelectCharacter} />
    </>
  );
}