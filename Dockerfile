

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/SklepInternetowyFrontend /usr/share/nginx/html


