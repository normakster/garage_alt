docker run \
--network=isolated_garage \
--name backend \
-p 8081:3000 \
garage-rest:latest
