# Install Guide

## Environment 

<div style="display: flex;">
<img height="30" src="https://img.shields.io/badge/-PHP%208.0.23-black.svg?logo=php&style=plastic">
<img height="30" src="https://img.shields.io/badge/-Laravel%208.33.1-black.svg?logo=laravel&style=plastic">
<img height="30" src="https://img.shields.io/badge/-Docker%2020.10.17-black.svg?logo=docker&style=plastic">
<img height="30" src="https://img.shields.io/badge/-Mysql%20%208.0.30-black.svg?logo=mysql&style=plastic">
<img height="30" src="https://img.shields.io/badge/-Apache%202.4.54-black.svg?logo=apache&style=plastic">
</div>

---

ディレクトリ構成図

```
laravel      
├─┬ apache/
│    └── default.conf
├─┬ php/
│    └── Dockerfile
├── mysql/
├── src/...
└── docker-compose.yml
```

---

## Build Environment

上記のディレクトリ環境を構築後，任意シェルにて以下を実行
 
```bash
# docker-compose and start
docker-compose up -d --build
```

bashやmysqlにはいるには以下を実行

```bash
# login bash
docker-compose exec php-apache /bin/bash

#login mysql
docker-compose exec database mysql -u root -p secret
```

## laravelのセッティング

laravelの環境構築を行いたい場合は先ほどと同じディレクトリでコマンドを実行してください
ただしnpmやnodeは入れていないので注意です．
バージョンは指定できますので"9.*"の部分を変更してください．

```
# login apache bash
docker-compose exec php-apache /bin/bash

#start project with version of ...
composer create-project laravel/laravel="9.*" .

# storage setting
chmod -R 666 storage
php artisan storage:link
```

### DB接続

.env.exampleをコピーして.envファイルを作成する

DBの設定を以下の通りに変更する
```
DB_CONNECTION=mysql
DB_HOST=database
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=secret
```

### migration

```bash

# DB migration
php artisan migrate
```

# Ports

|  Port  |  割当  |
| ---- | ---- |
|  tcp:80  |  8080  |
|  mysql:3606  |  4306  |
