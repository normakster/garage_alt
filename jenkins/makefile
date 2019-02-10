build:
	@docker build --rm -t garage-jenkins .
run:
	@docker run --network=isolated_garage -p 8080:8080 --name=jenkins -d garage-jenkins:latest
start:
	@docker start jenkins-master
stop:
	@docker stop jenkins-master
clean:
	@docker rm -v jenkins-master
