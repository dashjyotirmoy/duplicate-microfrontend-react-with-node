# ---------------- Build the frontend -----------------------
FROM node:14 as frontend_builder

COPY frontend /usr/app

WORKDIR /usr/app

ARG NPM_REGISTRY="https://registry.npmjs.org"
ARG HTTP_PROXY="http://proxy.auiag.corp:8080"
ARG HTTPS_PROXY="http://proxy.auiag.corp:8080"

RUN npm install --strict-ssl=false --registry ${NPM_REGISTRY}
RUN npm run build

# The frontend static files are now available under build/

# ---------------- Build and run the backend -----------------------
FROM node:14

COPY backend /usr/app

WORKDIR /usr/app

ARG NPM_REGISTRY="https://registry.npmjs.org"
ARG HTTP_PROXY="http://proxy.auiag.corp:8080"
ARG HTTPS_PROXY="http://proxy.auiag.corp:8080"

RUN npm install --strict-ssl=false --registry ${NPM_REGISTRY}
RUN npm run build

COPY --from=frontend_builder /usr/app/build build/frontend

EXPOSE 3000

CMD [ "npm", "start" ]
