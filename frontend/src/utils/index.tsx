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

interface CreateAndDispatchCustomEventOptions {
  name: string;
  selector: string;
  detail?: Record<string, unknown>;
}

export function createAndDispatchCustomEvent(options: CreateAndDispatchCustomEventOptions): void {
  const event = new CustomEvent(options.name, {
    detail: options.detail || {},
    bubbles: true,
    cancelable: true,
    composed: true,
  });
  const elem = document.querySelector(options.selector);
  if (elem) {
    elem.dispatchEvent(event);
  }
}
