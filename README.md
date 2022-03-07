# Empty example monorepo project

Creating a monorepo project with React and Nest.JS using Yarn Workspaces. 

## Project structure

We have 2 packages inside the project:
- **App:** React.JS application.
- **Server:** Nest.JS application Prisma.io Graphql.

Each of the packages have their own `package.json` file, so they define their dependencies as well as they have fully autonomy to publish a new version of the package into NPM or Yarn registry.

```
|- package.json => root workspace (private package used by yarn workspaces)
|--- packages
|------ app
|-------- package.json  => React APP
|------ server
|-------- package.json => Nest.js
```

## How to install and execute
Not finished yet, I will soon
