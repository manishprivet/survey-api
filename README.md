<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

A Survey Creation API

Built with [Nest](https://github.com/nestjs/nest) framework and Typescript.

## API Docs

Start the server in Development, and navigate to [localhost:3000/docs](http://localhost:3000/docs)

# Contributing

## Installation

```bash
$ npm install
```

## Environment Variables

You can reference `.env.sample` file for all Env variables needed to run the project

## Running the app

```bash
# development
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Setting up the database

If your database instance is fresh

Run 

```bash
$ SYNCHRONIZE_DB=1 npm run start:dev
```

to synchronize your database with the schema.

## Directory Structure

```bash
├── nest-cli.json
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── answer
│   │   ├── answer.controller.spec.ts
│   │   ├── answer.controller.ts
│   │   ├── answer.dto.ts
│   │   ├── answer.service.spec.ts
│   │   └── answer.service.ts
│   ├── app.module.ts
│   ├── config
│   │   └── typeorm.ts
│   ├── main.ts
│   ├── model
│   │   ├── answer.entity.ts
│   │   ├── base.entity.ts
│   │   ├── question.entity.ts
│   │   └── survey.entity.ts
│   ├── question
│   │   ├── question.controller.spec.ts
│   │   ├── question.controller.ts
│   │   ├── question.dto.ts
│   │   ├── question.service.spec.ts
│   │   └── question.service.ts
│   ├── survey
│   │   ├── survey.controller.spec.ts
│   │   ├── survey.controller.ts
│   │   ├── survey.dto.ts
│   │   ├── survey.service.spec.ts
│   │   └── survey.service.ts
│   └── survey.module.ts
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock
```

## DB Schema

Schema for the database can be found [here](<https://dbdiagram.io/d/60ec0aa74ed9be1c05c851b8>)
