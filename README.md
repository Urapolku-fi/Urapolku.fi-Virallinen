# Urapolku GitHub Repository 

## Table of Contents
1. [Introduction](#introduction)
2. [Environment](#environment)
3. [Branching Strategy](#branching-strategy)
4. [Pull Request Workflow](#pull-request-workflow)
5. [Build, Release, and Deploy Workflow](#build-release-and-deploy-workflow)
6. [Reverting a Release](#reverting-a-release)
7. [Code Quality Guidelines](#code-quality-guidelines)
8. [Getting Started Developing](#getting-started)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
9. [Testing](#testing)
10. [Troubleshooting](#troubleshooting)
11. [FAQ](#faq)
12. [Contact](#contact)
13. [Database Setup](#database-setup)
    - [Frontend](#frontend-database-setup)
    - [Backend](#backend-database-setup)
14. [API Documentation](#api-documentation)
15. [Logs and Monitoring](#logs-monitoring)
16. [Rollback Procedures](#rollback)
17. [Continuous Integration and Continuous Deployment](#ci-cd)
18. [Acknowledgements](#acknowledgements)

## Introduction
This repository contains the codebase for the Urapolku project. It includes a React/Vite frontend and a Node.js backend. This README serves as a guide for developers to understand the project structure and workflow.

## Environment
We maintain three environments:

1. **Production**: The live application accessible to users.
2. **Staging**: A replica of the Production environment for testing purposes.
3. **Development**: The active development branch.

## Branching Strategy
1. Create a new branch for each new feature using the naming convention: `Dev-Feature-Name`.
2. Merge feature branches into the `Development` branch.
3. When ready, merge `Development` into `Staging` for further testing.
4. After approval on `Staging`, merge into `Production`.

## Pull Request Workflow
1. Create a pull request (PR).
2. A workflow will be triggered to check for code quality, linting, and security.
3. PR should be reviewed by the CTO.
4. Once reviewed and passed, the PR will be merged.

## Build, Release, and Deploy Workflow (WIP)
1. Upon merging a PR towards the Staging Branch, a new workflow is triggered: `Build, Release, and Deploy`.
2. This workflow creates a Docker image and zip, tar.gz archive files as artifacts.
3. Docker images are pushed to a private Docker Hub repository.
4. The images are automatically deployed to a Digital Ocean droplet to create a Staging server.
5. After verification, a snapshot is made for backup purposes.
6. After the environment is deployed, there will be a testing environment available to check whether the Staging branch works correctly.
   
## Reverting a Release (WIP)
A "Killswitch" button is available on GitHub to revert to a previous release in case of an emergency in Production.

## Code Quality Guidelines
Follow the [Quality, Security, and Styling Assurance Guidelines](https://github.com/Urapolku-fi/Urapolku.fi-Virallinen/wiki/Quality,-Security,-and-Styling-Assurance-Guidelines).

## Getting Started Developing

### Frontend Setup
Navigate to the `frontend` directory and run the following commands:

```bash
npm install
```

Go to the Discord server for Urapolku that you are invited to, and copy the correct environemt variables for the development branch for the frontend into a .env file within the frontend directory
Afterwards, run the following commands:
```bash
npm run dev
```
You should now be ready to start working on the frontend code.

### Backend Setup
Navigate to the backend directory and run the following commands:

```bash
npm install
```

Go to the Discord server for Urapolku that you are invited to, and copy the correct environment variables for the development branch for the backend into a .env file within the backend directory
Afterwards, run the following commands:
```bash
npm run dev
```


## Testing

At some point we will have unit tests for our frontend and backend. These tests should be written by developers to make sure that components that are made inside of these projects keep working like they should.

We are going to create a test script inside the package.json for each project.
You should be able to run the command:

```bash
npm run test
```

In order to execute the unit tests.

## Troubleshooting
If you encounter any issues during the setup or development process, please refer to the following resources:

FAQ section (coming soon)
Discord support channels
Issue Tracker on GitHub

## FAQ
- Q: Where do I find the environment variables?
  A: Refer to the #environment-variables channel on Discord.

## Contact
For any additional questions or feedback, please contact:

- Chief Technology Officer (CTO) - Simbaclaws on Discord
- Product Manager - AdemOttoman on Discord

## Database Setup

### Frontend

The frontend doesn't directly interact with the database, but it's crucial to ensure that environment variables related to API endpoints are correctly set. Refer to the `#environment-variables` channel on Discord for more details.

### Backend

Before running the backend server, ensure your database connection strings and related environment variables are set up correctly. Refer to the `#environment-variables` channel on Discord for configuration details.

## API Documentation (WIP)

We maintain a separate API documentation that you can find [here](API_DOCUMENTATION_LINK). This documentation covers all the API endpoints, request/response types, and statuses.

## Logs and Monitoring (WIP)

Logs for the staging and production environments are stored in [LOG_STORAGE_SERVICE]. To access these logs, please contact the CTO or project manager.

## Rollback Procedures (WIP)

For guidelines on how to rollback features or database changes, consult our [Rollback Procedures Documentation](LINK_TO_ROLLBACK_DOC).

## Continuous Integration and Continuous Deployment (CI/CD)

We utilize GitHub Actions for our CI/CD pipelines. For more details, check the `.github/workflows` directory in this repository.

## Acknowledgments

Special thanks to all contributors and team members who have been a part of this project.

Another test...
