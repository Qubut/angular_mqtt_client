# WarningApp

Using MQTT client build with angular as object detection notification app

if you're using mosquitto on your local machine add this to your config file

```
listener 8081
protocol websockets
```
then you can add the ssl config for websockets

```
cafile `pathTo/cafile`
keyfile `pathTo/keyfile`
crtfile `pathTo/crtfile`
```
build the application in production mode using
`docker build image-name:version .`
or in development mode using
`docker build -f=Dockerfile.dev image-name:version .`
and the use `docker run -d --network=host image-name:version` to run the container

the application is then on localhost:80 for prod. and localhost:4200 for dev.

