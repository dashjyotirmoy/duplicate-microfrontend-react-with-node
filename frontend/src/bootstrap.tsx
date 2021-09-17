import React from 'react';
import ReactDOM from 'react-dom';

import { lazyLoad } from './utils';

/**
 * This determines which React App to load according to the location hash (fragment identifier).
 * Different location hash values identify different MFEs and return the relevant iframe-app.
 * If there is no match on the location hash, then it falls back to the default demo app.
 * This approach allows us to host multiple related MFEs from the same application as well as provide
 * a demo / testing facility for MFE development.
 */
function getRelevantApp() {
  if (window.location.hash === '#example-search') {
    return lazyLoad(() => import('./containers/example-search/iframe-app'));
  }
  if (window.location.hash.match(/^#example-details\/\d+$/)) {
    return lazyLoad(() => import('./containers/example-details/iframe-app'));
  }
  return lazyLoad(() => import('./pages/app'));
}

const App = getRelevantApp();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);