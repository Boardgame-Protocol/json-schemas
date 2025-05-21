# JSON-Schema

This project contains a collection of JSON Schemas and corresponding examples for validating requests and responses in a board game protocol. The schemas are organized by version and type (requests and responses) and are used to ensure the consistency and correctness of data exchanged between clients and servers.

## Prerequisites to run validation

- Docker installed on your machine.

## Useful commands

`docker run -it --rm -v $(pwd):/usr/src/app -w /usr/src/app node:22 npm install`  
Download all the needed dependecies to run validation script.

`docker run -it --rm -v $(pwd):/usr/src/app -w /usr/src/app node:22 node src/validate.js`  
Runs the validation script to check that JSON files conform to their respective schemas.

`docker run -it --rm -v $(pwd):/usr/src/app -w /usr/src/app node:22 bash`  
Starts a Docker container with Node.js for running interactive commands.
