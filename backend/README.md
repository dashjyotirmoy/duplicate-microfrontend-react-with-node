# backend

* Node / Express application serving an `/api` and static frontend artefacts from `/`.
* `/src` for the application source code
* `/src/api` for the specific logic required by each api endpoint. Each subfolder normally has code for a group of related api endpoints (e.g. operating on the same entity) and provides a single sub-router to be included in the main express app. `/src/routes.ts` is where the api sub-routes are included.
* `/src/utils` has a bunch of utility functions / cross-cutting concerns.
* `/src/config.ts` is where all of the runtime environment configuration is loaded. It provides defaults as necessary so the app can run without needing to specify anything. It uses `dotenv` to load config so you can either set environment variables directly in your shell, or create a local `.env` file with the settings you want.
