#! /usr/bin/env node

const fs = require("fs");
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
  
const path = "./src"
const typePassed = process.argv[0]
const types = ['component', 'view', 'route', 'store']

const createFile = () => {fs.access(path, (error) => {
    // To check if the given directory 
    // already exists or not
    if (error) {
      // If current directory does not exist
      // then create it
      fs.mkdir(path, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("New Directory created successfully !!");
        }
      });
    } else {
      console.log("Given Directory already exists !!");
    }
  });
}

if(argv.create === 'component') {
    console.log('component selected')
} 

if(argv.create === 'view') {
    console.log('view selected')
}

if(argv.create === 'route') {
    console.log('route selected')
} 

if(argv.create === 'store') {
    createFile()
}

