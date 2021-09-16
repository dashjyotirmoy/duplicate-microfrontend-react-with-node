import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ExampleDetails from '../../containers/example-details';

interface ExampleDetailsPageParams {
  id: string;
}

export default function ExampleDetailsPage(): React.ReactElement {
  const history = useHistory();
  const { id } = useParams<ExampleDetailsPageParams>();

  const onBackToSearch = () => {
    history.push('/example-search');
  };

  return (
    <>
      <h1>Example Details Page</h1>
      <button onClick={onBackToSearch}>Back to example search page</button>
      <ExampleDetails characterId={+id} />
    </>
  );
}