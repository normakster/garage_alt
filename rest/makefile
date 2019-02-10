build:
	@docker build --rm -t garage-rest .
run:
	@docker run --network=isolated_garage --name back_end -p 8081:3000 garage-rest:latest
stop:
	@docker stop back_end
clean-data:
	@docker rm -v back_end
clean-images:
	@docker rmi garage-rest:latest
ps:
	@docker ps --filter "name=back_end"
