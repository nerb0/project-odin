# FROM oven/bun:1-debian AS base
# WORKDIR /usr/src/app
#
# # install dependencies into temp directory
# # this will cache them and speed up future builds
# FROM base AS install
# RUN mkdir -p /temp/dev
# COPY package.json bun.lockb /temp/dev/
# RUN cd /temp/dev && bun install --frozen-lockfile
#
# FROM base AS prerelease
# COPY --from=install /temp/dev/node_modules node_modules
# COPY . .

FROM oven/bun:1-debian

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .
# COPY public public

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 3000
