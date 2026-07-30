############################
# @author EliasDH Team     #
# @see https://eliasdh.com #
# @since 01/01/2026        #
############################
# Stage 1: build backend
FROM node:20-alpine AS builder

LABEL maintainer="EliasDH"
LABEL version="1.0"
LABEL description="This is the backend image for the app."
LABEL org.opencontainers.image.description="This is the backend image for the app."

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# Stage 2: Run backend
FROM node:20-alpine

LABEL maintainer="EliasDH"
LABEL version="1.0"
LABEL description="This is the backend image for the app."
LABEL org.opencontainers.image.description="This is the backend image for the app."

WORKDIR /app
COPY --from=builder /app .

EXPOSE 3000
CMD ["node", "src/server.js"]