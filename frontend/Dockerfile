FROM node:lts-buster

WORKDIR /app

# copy the json file first
COPY ./ui-app/package.json .

# install npm dependencies
RUN npm install -g npm
 

COPY ./ui-app .


CMD ["npm", "run", "start" ]
