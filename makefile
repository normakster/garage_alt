build:
	@docker-compose -p garage build
run:
	@docker-compose -p garage up -d jenkins db back_end front_end
stop:
	@docker-compose -p garage down
clean-data:
	@docker-compose -p garage down -v
clean-images:
	@docker rmi 'docker images -q -f "dangling=true"'
ps:
	@docker-compose -p garage ps
garage-log:
	@docker-compose -p garage exec master tail -f /var/log/jenkins/jenkins.log
