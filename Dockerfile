FROM node:14.16.0-alpine
RUN yarn global add serverless@v2.29.0
RUN apk add \
  make \
  automake \
  gcc \
  g++ \
  subversion \
  python3
RUN apk add --no-cache imagemagick ffmpeg graphicsmagick