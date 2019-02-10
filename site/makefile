build:
	@docker build --rm -t garage-site .
run:
	@docker run --network=isolated_garage --name front_end -p 81:3000 garage-site:latest
stop:
	@docker stop front_end
clean-data:
	@docker rm -v front_end
clean-images:
	@docker rmi garage-site:latest
ps:
	@docker ps --filter "name=front_end"
