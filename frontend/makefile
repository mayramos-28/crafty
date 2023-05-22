/**
 * Makefile
 *
 * Makefile for docker-compose
 *
 * @package    Makefile
 * @subpackage DockerCompose
 * @category   Makefile
 * @version    1.0.0
 * @since      2021-10-08
 * @license    MIT License
 */
build:
	docker compose build

start:
	docker compose up -d --force-recreate

logs:
	docker compose logs -f

shell:
	docker compose run --rm node sh

down:
	docker compose down
