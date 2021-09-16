# mfe-example
Example setup for a React MFE and Nodejs BFF

## Get started

### With Docker

1. `docker compose up -d`
1. <http://localhost:3000>
1. `docker compose down`

### Otherwise

1. `cd frontend`
1. `npm i`
1. `npm run build`
1. `cd ../backend`
1. `npm i`
1. `npm run build`
1. `cp ../frontend/build -R build/frontend`
1. `npm start`

### Backend dev

1. `npm run dev`

### Frontend dev

1. `npm run dev`
1. <http://localhost:3000>

## Code conventions

1. 

## Notes

1. Frontend uses React 16 because `@salesforce/design-system-react` does not currently support React 17.
