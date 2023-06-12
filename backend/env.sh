echo > Dockerfile
echo "FROM node:alpine" >> Dockerfile
echo "WORKDIR /usr/src/app" >> Dockerfile
echo "ENV ENV=$ENV" >> Dockerfile
echo "ENV PORT=$PORT" >> Dockerfile
echo "ENV PROD_DB_HOST=$PROD_DB_HOST" >> Dockerfile
echo "ENV PROD_DB_USERNAME=$PROD_DB_USERNAME" >> Dockerfile
echo "ENV PROD_DB_PASSWORD=$PROD_DB_PASSWORD" >> Dockerfile
echo "ENV PROD_DATABASE=$PROD_DATABASE" >> Dockerfile
echo "ENV PROD_SCHEMA=$PROD_SCHEMA" >> Dockerfile
echo "ENV DEV_DB_HOST=$DEV_DB_HOST" >> Dockerfile
echo "ENV DEV_DB_USERNAME=$DEV_DB_USERNAME" >> Dockerfile
echo "ENV DEV_DB_PASSWORD=$DEV_DB_PASSWORD" >> Dockerfile
echo "ENV DEV_DATABASE=$DEV_DATABASE" >> Dockerfile
echo "ENV DEV_SCHEMA=$DEV_SCHEMA" >> Dockerfile
echo "COPY package*.json ./" >> Dockerfile
echo "RUN npm install -g @nestjs/cli" >> Dockerfile
echo "RUN npm install" >> Dockerfile
echo "COPY . ." >> Dockerfile
echo "RUN npm run build" >> Dockerfile
echo "CMD [ "npm", "run", "start" ]" >> Dockerfile