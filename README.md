# CDT-Express-Setup

## Description
An npm package that upon installation sets up a skeleton for a project that would be using express, a SQL database, and the MVC design pattern.

## Installation
From a blank repo, simply run the command `npm i cdt-express-setup` and let the package install.

## Usage
Upon installation the user will receive the following written to their repo:

- A server.js file that will contain code to start an express session and connect to a server
- Express and Sequelize will be installed for the user if it is not already installed
- A blank config folder
- A blank controllers folder
- A blank db folder
- A blank models folder
- A blank public folder
- A blank views folder

The user will still need to create files to initialize a database and to connect the server to wherever they choose to host their project. 
