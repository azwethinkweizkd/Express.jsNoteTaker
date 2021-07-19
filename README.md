# Express.jsNoteTaker [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description

Take and save notes within the browser for future use. This application is deployed and hosted on Heroku and can be accessed here: [Note Taker Application](https://express-js-note-taker-kd.herokuapp.com/). The notes the user creates will be stored on Heroku's cloud system and stored within a _db.json_ file written into the application's local directory.

Here is a simple GIF demostrating the functionality of the Note Take Application:

![Note Taker Application Screenshot](public/assets/gif/screenshot.gif)

## Table of Contents

- ### [Installation](#installation)

- ### [Usage](#usage)

- ### [Contribution](#contribution)

- ### [Test Instructions](#testInstructions)

- ### [License](#License)

## Installation

Installation of this application will require one to transfer all files (JS & json) to a working directory on their computer. As well as the ability to acces the computer terminal, either through GitBash or VSCode. This applcation can be found on this GitHub repository:

[Note Taker App using Express.js - Kevin Devlin](https://github.com/azwethinkweizkd/Express.jsNoteTaker)

Once files have been save into a working directory a one more step will need to take place, and that is to install node_modules. The node_modules will include two important installation packages which are: inquirer & fs.

To install the node_modules properly one will need to type in the terminal under the current working directory for the application:

```bash
npm i
```

Make sure that you are in the directory that these JS & json files have been saved to. Otherwise you will be intalling the node_modules to the wrong directory, and thus will not allow the appliation to work.

The two pacakages that will be downloaded are express and uuid. Express will be used to create a server location for the app to operate, and uuid will be used to create a unique id to get, post, or delete a note.

## Usage

Take notes and store them on a cloud application to access them at anytime.

## Contribution

Kevin Devlin - Main Contributor

GitHub Username:

[azwethinkweizkd](https://github.com/azwethinkweizkd)

## Test Instructions

No tests are currently implemented with this version of the application.

## License

    This application was created using GNU GPL v3
