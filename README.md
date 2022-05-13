## NestJS do Zero com TypeORM, Mongoose, Prisma e Swagger
- Link para o curso: https://www.udemy.com/course/nestjs-do-zero/

### Trabalhando com Nestjs
- cli:
  - https://docs.nestjs.com/cli/overview
- https://docs.nestjs.com/

### Trabalhando com modulos no Nestjs
- https://docs.nestjs.com/modules#modules

### Trabalhando com controllers no Nestjs
- https://docs.nestjs.com/controllers

### Trabalhando com serviços no Nestjs
- https://docs.nestjs.com/providers#services

### Trabalhando com DTO(Data Transfer Object)
- https://www.youtube.com/watch?v=zfWmbEVpABs&list=PLE0DHiXlN_qqRNX4KpkNKvFswCXHUwoyL&index=12

### Trabalhando com ValidationPipe
- https://docs.nestjs.com/techniques/validation#using-the-built-in-validationpipe

### Trabalhando com Mapped types
- https://www.npmjs.com/package/@nestjs/mapped-types
- https://docs.nestjs.com/openapi/mapped-types

### Trabalhando com TypeORM e Postgres
- Configurando typeorm no nestjs:
  - https://docs.nestjs.com/recipes/sql-typeorm#sql-typeorm
  - https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f
- Trabalhando com Entidades no TypeORM:
  -  https://typeorm.io/entities  
- Trabalhando com Repository:
  - https://typeorm.io/working-with-repository
- Trabalhando com relacionamentos no banco de dados com typeorm
  - https://typeorm.io/relations
- Utilizando a opção @JoinTable para trabalhar com relação de many to many
  - https://typeorm.io/relations#jointable-options
- Trabalhando com migrations no typeORM
  - Depois de entrar em produção, você precisará sincronizar as alterações do modelo no banco de dados. Normalmente, não é seguro usar "synchronize: true" para sincronização de esquema na produção depois de obter dados em seu banco de dados. Aqui é onde as migrações vêm para ajudar.
  - https://typeorm.io/migrations
  - npx typeorm migration:create -n CourseRefactoring
  - apos descrever os metodos up e down da migration, você deve executar um 
    - "npm run build" para atualizar a pasta /dist
    - para executar a migration basta executar "npx typeorm migration:run"
    - para desfazer oque foi feito basta executar "npx typeorm migration:reverte"

### Trabalhando com Docker
- https://docs.docker.com/get-started/
  - Criando na raiz do projeto um arquivo "Dockerfile", adicionando o seguinte código para iniciar um container com as dependencias necessarias:
```dockerfile
FROM node:14.15.4-alpine3.12

RUN apk add --no-cache nodejs

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app
```
  - Criando arquivo docker para subir uma imagem do postgres na pasta ".docker/postgres/Dockerfile"
```dockerfile
FROM postgres

RUN usermod -u 1000 postgres
```
  - Criando arquivo entrypoint na pasta ".docker/postgres/entrypoint" para realizar comandos no linux no container docker
  - Rodar no terminal bash "chmod +x .docker/entrypoint.sh" para dar permissão ao arquivo
- Trabalhando com docker compose
  - https://docs.docker.com/compose/
  - criando arquivo na raiz do projeto:"docker-compose.yml"
```dockerfile

```

