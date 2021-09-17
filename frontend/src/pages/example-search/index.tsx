import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ExampleSearch from '../../containers/example-search';
import { Character } from '../../fetchers/example-fetcher';

export default function ExampleSearchPage(): React.ReactElement {
  const history = useHistory();
  const [isListening, setListening] = useState(false);
 
  useEffect(() => {
    if (!isListening) {
      const section = document.querySelector('#examplesearchpage_section');
      if (section) {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        section.addEventListener('examplesearch:onSelectCharacter', (event: any) => {
          console.log(event)
        });
        setListening(true);
      }  
    }
  }, [isListening]);
 
  const onShowExampleHome = () => history.push('/');
  const onSelectCharacter = (character: Character) =>
    history.push(`/example-details/${character.id}`);

  return (
    <>
      <h1>Example Search Page</h1>
      <button onClick={onShowExampleHome}>Go to example home page</button>
      <div id="examplesearchpage_section">
        <ExampleSearch onSelectCharacter={onSelectCharacter} />
      </div>
    </>
  );
}