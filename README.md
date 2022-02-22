# SmartFlow
A Self-Sovereign Identity Based Business Process Management System

We propose a blockchain-based business process management model using self-sovereign identity and verifiable credentials. It aims to perform more fine-grained access control using decentralized identifiers and verifiable certificates for automated business process execution rights through smart contracts.

## Preparation
#### 1. Ganache CLI
By default, the core of Smart-Flow was configured to run on top of Ganache CLI which is a Node.js based Ethereum client for testing and development. It uses ethereumjs to simulate full client behavior and make developing Ethereum applications. All the instructions about the installation can be found here: https://github.com/trufflesuite/ganache-cli/.

Note that Ganache CLI is written in Javascript and distributed as a Node package via npm. Make sure you have Node.js (>= v6.11.5) installed. Besides, be aware to start the Ganache CLI server before running the applications Smart-Flow. In that respect, you only need to open a terminal on your computer and run the command: ganache-cli

#### 2. MongoDB
The Smart-Flow uses a process repository to store and access metadata produced by Smart-Flow when compiling the BPMN model into Solidity smart contracts. Currently, this repository is implemented on top of MongoDB which is a database that stores data as JSON-like documents. The instructions to install MongoDB Community Edition can be accessed from here: https://docs.mongodb.com/manual/administration/install-community/.

#### 3. Gulp
Before running Smart-Flow, make sure you installed gulp-cli running the command: npm install gulp-cli -g. All the instructions about the glup-cli installation can be found here: https://www.npmjs.com/package/gulp-cli?activeTab=readme.

#### 4. Angular-cli
Before running the Smart-Flow, make sure that you installed angular-cli: https://github.com/angular/angular-cli/wiki.

## Running Operation
#### 1. Run ganache-cli
#### 2. Run MongoDB
#### 3. Configuring smart-core
To set up and run the core, open a terminal in your computer and move into the folder smartflow-core. <br>
To install the dependencies, run the commands: npm install or gulp build <br>
To start the application, you may use one of the following commands: node ./out/www.js or gulp
#### 4. Congifuring execution-panel
To set up and run the execution panel, open a terminal in your computer and move into the folder execution-panel. <br>
To install the dependencies, run the command: npm install <br>
To run the application, use the command: ng serve <br>
Open a web browser and put the URL http://localhost:4200/. The execution panel interacts with the REST-API of Smart-Flow. Accordingly, the request/results of each operation are printed in the terminal where running Smart-Flow’s core.
#### 5. Deploy Smart Contract
Select the deploy environment to Web3 Provider in Remix (Ethereum IDE). Compile and deploy the 2 contracts.
#### 6. Change verification manager contract address in Remix IDE in web3configuration.ts
