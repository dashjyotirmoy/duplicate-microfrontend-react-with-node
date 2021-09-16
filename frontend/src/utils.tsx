import React from 'react';

/**
 * Lazy loader
 * e.g. lazyLoad(() => import('./index'));
 */
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function lazyLoad(importFunc: () => Promise<{ default: React.ComponentType<any>; }>): (props: unknown) => JSX.Element {
  const LazyComponent = React.lazy(importFunc);
  return function load(props: unknown): JSX.Element {
    return (
      <React.Suspense fallback={null}>
        <LazyComponent {...props} />
      </React.Suspense>
    );
  }
}
