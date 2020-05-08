FROM       node:12-slim as build
WORKDIR    /app
COPY       . .
RUN        npm ci
CMD        [ "npm", "run", "build" ]

FROM       node:12-slim as test
WORKDIR    /app
COPY       --from=build /app .
ENTRYPOINT [ "npm", "t" ]