# Poetry NextJs Client

## Установка

Для запуска приложения требуется **Docker** и **Docker Compose**.

Если в сервисе [Poetry Laravel API](https://github.com/WebConsul/poetry-laravel-api) не была создана общая сеть **poetry**, необходимо выполнить:

```
make docker-create-network
```

Затем для инициализации приложения выполнить команду:
```
make init
```

## Управление

Запуск:
```
make up
```

Остановка приложения:

```
make down
```

Перезагрузка приложения:

```
make restart
```

Вход в окружение с node:

```
make nextjs-shell
```

Здесь можно выполнять любые команды, устанавливать пакеты yarn и прочее.

## Интерфейсы

Приложение - http://localhost:8081

## Качество кода

Запуск проверки качества кода:

```
make nextjs-lint
```
