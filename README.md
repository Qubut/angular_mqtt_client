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


