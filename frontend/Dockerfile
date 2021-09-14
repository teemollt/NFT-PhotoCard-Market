# build stage
FROM node as build-stage
# 이미지 내에서 명령어를 실행할 디렉토리 설정
WORKDIR /home/node/app
COPY package*.json ./
# bable-plugin error 생길시
# npm install @vue/babel-preset-app --save-dev
# RUN npm install --production
# RUN npm install -g @vue/cli-service
RUN npm install
COPY . .
RUN npm run build
# production stage
FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage home/node /usr/share/nginx/html
COPY --from=build-stage home/node/app/dist /usr/share/nginx/html
EXPOSE 80
# 컨테이너 실행시 실행할 명령어
CMD ["nginx", "-g", "daemon off;"]