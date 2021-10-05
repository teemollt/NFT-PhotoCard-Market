# # build stage
# FROM node as build-stage
# # 이미지 내에서 명령어를 실행할 디렉토리 설정
# WORKDIR /home/node/app
# COPY package*.json ./
# # bable-plugin error 생길시
# # npm install @vue/babel-preset-app --save-dev
# # RUN npm install --production
# # RUN npm install -g @vue/cli-service
# RUN npm install
# COPY . .
# RUN npm run build
# # production stage
# FROM nginx:stable-alpine as production-stage
# RUN rm /etc/nginx/conf.d/default.conf
# COPY ./nginx/homepage.conf /etc/nginx/conf.d/homepage.conf
# COPY --from=build-stage home/node/app /usr/share/nginx/html/homepage

# #COPY --from=build-stage home/node /usr/share/nginx/html
# #COPY --from=build-stage home/node/app/dist /usr/share/nginx/html
# EXPOSE 80
# # 컨테이너 실행시 실행할 명령어
# CMD ["nginx", "-g", "daemon off;"]
# FROM node:12.18.2 as build

# ARG REACT_APP_SERVICES_HOST=/services/m

# WORKDIR /app

# COPY ./package.json /app/package.json
# COPY ./package-lock.json /app/package-lock.json

# RUN yarn install
# COPY . .
# RUN yarn build


# FROM nginx
# COPY ./nginx/homepage.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
FROM node:12.17.0 as build
WORKDIR /app
COPY package*.json ./

RUN npm cache clean --force
RUN rm package-lock.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY ./nginx/homepage.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]