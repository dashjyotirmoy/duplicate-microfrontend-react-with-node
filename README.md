# mfe-example

Example setup for a React MFE and Nodejs BFF.

Supports the hosting of multiple related MFEs from the same application as well as providing
a demo / testing facility for local MFE development. It does this by allowing different apps to be boot-strapped according to the location hash (fragment identifier). Different location hash values identify different MFEs and enable use of the relevant iframe-app. If there is no match on the location hash, then it falls back to the default demo app.

## Get started

Also see [backend](./backend/README.md) and [frontend](./frontend/README.md) docs.

### Run with Docker

1. `docker compose up -d`
1. <http://localhost:3000>
1. `docker compose down`

### Backend dev

1. `npm run dev`

### Frontend dev

1. `npm run dev`
1. <http://localhost:3001>

### Test out the builds

1. `cd frontend`
1. `npm i`
1. `npm run build`
1. `cd ../backend`
1. `npm i`
1. `npm run build`
1. `cp -R ../frontend/build build/frontend`
1. `npm start`

## Notes

1. Frontend uses React 16 because `@salesforce/design-system-react` does not currently support React 17.
1. In `dev` mode the frontend uses `3001` and the backend `3000` (by default). In this way you can develop both the front and back simultaneously with communication between them.
1. When in `dev` mode you can open `frontend/test/example-iframe.html` to see things working in a iframe. Compare this to the full page example at <http://localhost:3001>. The iframes use wrapper applications leveraging the same underlying containers.
