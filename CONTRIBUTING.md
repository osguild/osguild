# Contributing to OS Guild

The OS Guild app uses PNPM workspaces to handle dependency management between the frontend and the backend. The frontend uses React + Vite + TypeScript, and the backend uses AWS Lambda + TypeScript/Node.js. Cloud resources are provisioned using AWS CDK.


## Project Setup

To get started, you'll need [PNPM installed](https://pnpm.io/installation). Run `pnpm install` in the root directory of the project to install dependencies for each project. To start the server, you'll want to have the [AWS SAM CLI installed](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html).

### Local Development for the Backend

To test changes to the backend, run the following command:

`pnpm server:start`

Note, changes made to the backend will not be hot-reloaded. You'll need to restart the server and execute the command again for changes to be reflected. 

Once the command completes, the server should be running on `localhost:3000`.

### Frontend Setup 

To start the frontend locally, run `pnpm dev:ui`. The frontend web server will be running `localhost:5173`
