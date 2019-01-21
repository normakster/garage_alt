docker run \
--network=isolated_garage \
--name db \
-p 27017:27017 \
garage-db_mongo:latest
