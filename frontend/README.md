# frontend

* React application using webpack 5 for module federation.
* `/src` for the application source code.
* `/src/components` for react elements that don't interact with the backend.
* `/src/containers` for react elements that interact with the backend.
* `/src/fetchers` for the custom hooks that fetch data. This app uses [SWR](https://swr.vercel.app/) so the fetchers mostly follow a similar implementation.
* `/src/pages` has the pages for the main app that acts as a testing / demo mechanism for the MFE containers. Actual use of the MFEs will be either by some other container app loading them remotely with module federation, or via the `iframe-app.tsx` MFE wrappers to enable their use from iframes.
* `/src/utils` has a bunch of utility functions / cross-cutting concerns.
* `/src/bootstrap.tsx` is where the relevant App is determined from the location hash.
* `/src/config.ts` is where all of the build-time environment configuration is loaded. Webpack is using the `dotenv-webpack` plugin to set the relevant values for a `dev` or `prod` build.
* `/src/index.tsx` is the main entry point.
* `/test/example-iframe.html` is a simple html file for testing the MFEs via iframes. It illustrates how to send and receive messages to/from the MFEs.
* `/webpack` contains the webpack configuration.
* `/webpack/common-plugins.ts` defines the `ModuleFederationPlugin` that is key to this MFE approach.
