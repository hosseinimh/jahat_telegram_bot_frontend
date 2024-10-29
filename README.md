# Jahat Telegram bot :

- docker
- docker compose
- access to self-hosted docker image registry **Note: inorder to transfer the docker image to safe cloud instead of keeping it into the local systems**

## Run project with docker-compose.

- `docker-compose up --build -d `( it first build a new docker image and then runs the project's new docker image )
- `docker push reg.hamsaa.ir/hamsaa-admin-panel:latest` ( it pushes built docker image to docker image registry )
- `docker compose up -d` ( it just runs the latest image that exists on machine  )
- `docker compose down` ( it destroys `hamsaa-admin` docker container and frees the allocated external port(s) in the machine )

## create the latest docker image manually.

- `sudo docker build -t reg.hamsaa.ir/hamsaa-admin-panel:latest`
- `docker push reg.hamsaa.ir/hamsaa-admin-panel:latest`
- `docker run -d -p 5002:80 --name hamsaa-admin-container reg.hamsaa.ir/hamsaa-admin-panel:latest`
- `docker stop hamsaa-admin-container`
- `docker rm hamsaa-admin-container`
