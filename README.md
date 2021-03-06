<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">CRUD Realizado com NestJS + MariaDB</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Este ?? um exemplo de um crud basico aplicando as seguintes tecnologias:

1. NestJS (nodejs)
2. MariaDB (banco de dados)
3. Swagger (documenta????o da api)
4. Docker
5. Tratamento de Respostas de Sucesso e Erros

## Installation


No terminal digite o comando abaixo para realizar a instala????o:
```bash
$ npm install
```

Ap??s a execu????o do comando acima execute o comando abaixo para levantar o Docker com o banco de dados MariaDB, a configura????o do Docker voc?? encontra no arquivo docker-compose.yml.
```bash
$ docker-compose up -d
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger para documenta????o da API

A documenta????o da API se d?? atrav??s do pacote do Swagger e sua configura????o no arquivo main.ts e nos arquivos de controllers e entities.

Para acessar a documenta????o deve-se acessar o link:
[http://localhost:3000/api/](http://localhost:3000/api/)
.

.

.

## NestJS - CRUD Generator

Para que o NestJS crie novos CRUD(s) j?? com a arquitetura de desenvolvimento padr??o da paltaforma, basta executar o comando abaixo em seu terminal:

```bash
$ nest g resource
```

Executando o comando acima, voc?? dever?? informar um nome para esse resource e automaticamente, o NestJS ir?? criar os controllers, modules, entities e services para a sua implementa????o.

.

.

## Variaveis de ambiente


Para o gerenciamento das variaiveis de ambiente, utilizamos o pacote:
env-cmd

Para instalar utilizamos o seguinte comando:
```bash
$ npm install env-cmd --save
```

Com este pacote instalado podemos ir em nosso arquivo package.json e informar qual arquivo de env cada ambiente ir?? utilizar.

Veja os exemplos abaixo do arquivo package.json onde colocamos um arquivo de env para cada ambiente.
```bash
"start": "NODE_ENV=local env-cmd -f env/local.env nest start",
"start:dev": "NODE_ENV=dev env-cmd -f env/dev.env nest start --watch",
"start:debug": "NODE_ENV=debug nest start --debug --watch",
"start:prod": "NODE_ENV=prod env-cmd -f env/prod.env  nest start --debug --watch",
```

## Stay in touch

- Author - [Eduardo Chiaradia](http://www.chiaradia.com.br)
- Website - [http://www.chiaradia.com.br](http://www.chiaradia.com.br)
