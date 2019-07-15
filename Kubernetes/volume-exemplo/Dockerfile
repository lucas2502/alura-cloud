#Config image container

#From node last version
FROM node:latest
#Ass image author
MAINTAINER Lucas Gonçalves
#
ENV NODE_ENV=production
#Var Port
ENV PORT=3000
#Copy all info (.) for folder "/var/www"
COPY . /var/www
#Folder eexecuted commands
WORKDIR /var/www
#Executed code for install dependency
RUN npm install
#Command executed after starting the container
ENTRYPOINT npm start
#Expose usage port
EXPOSE $PORT
