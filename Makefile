init: docker-down-clear \
	  nextjs-clear \
	  docker-pull docker-build docker-up \
	  nextjs-init

up: docker-up
down: docker-down
restart: down up

docker-create-network:
	docker network create poetry

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down --remove-orphans

docker-down-clear:
	docker-compose down -v --remove-orphans

docker-pull:
	docker-compose pull

docker-build:
	docker-compose build

nextjs-clear:
	docker run --rm -v ${PWD}:/app -w /app alpine sh -c 'rm -rf .ready'

nextjs-init: nextjs-yarn-install nextjs-ready

nextjs-yarn-install:
	docker-compose run --rm frontend-node-cli yarn install

nextjs-ready:
	docker run --rm -v ${PWD}:/app -w /app alpine touch .ready

nextjs-shell:
	docker-compose run --rm frontend-node-cli sh

nextjs-lint:
	docker-compose run --rm frontend-node-cli npm run lint