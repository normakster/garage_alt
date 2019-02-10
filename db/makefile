build:
	@docker build --rm -t garage-db_mango .
run:
	@docker run --network=isolated_garage --name db -p 27017:27017 garage-db_mongo:latest
stop:
	@docker stop db
clean-data:
	@docker rm -v db
clean-images:
	@docker rmi garage-db_mango:latest
ps:
	@docker ps --filter "name=db"
