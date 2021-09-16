import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ExampleHomePage(): React.ReactElement {
  const history = useHistory();

  const onShowExampleSearch = () => {
    history.push('/example-search');
  };

  return (
    <>
      <h1>Example Home Page</h1>
      <button onClick={onShowExampleSearch}>Go to example search page</button>
    </>
  );
}