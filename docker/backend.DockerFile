FROM oven/bun:1

WORKDIR /usr/src/app

COPY ./package.json ./package.json

COPY ./bun.lock ./bun.lock

COPY ./turbo.json ./turbo.json

COPY ./packages ./packages

COPY ./apps/backend ./apps/backend

RUN bun install

RUN bun run generate:db

EXPOSE 8080

CMD [ "bun", "run", "start:backend" ]