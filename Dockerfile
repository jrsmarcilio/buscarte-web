FROM node:14.17-alpine
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
#COPY package.json /app/package.json
COPY package.json ./
RUN npm install --silent
# RUN npm install react-scripts@3.3.1 -g --silent
RUN npm install react-scripts@4.0.3 -g --silent

CMD ["npm", "start"]