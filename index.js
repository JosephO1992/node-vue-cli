#! /usr/bin/env node

const fs = require("fs");
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const path = require('path')
  
const basePath = "./src"
const typePassed = process.argv[0]
const types = ['component', 'view', 'route', 'store']

const createFile = (input) => {
    if(fs.existsSync(basePath)) {

        let existsPath = `src/${input}`
        let completePath = './src/components'

        fs.mkdirSync(existsPath, (error) => {
            if(error) {
                console.log(error)
            } else {
                console.log('created')
            }
        }) 
    } else {
        fs.mkdir(path.join(__dirname, 'src/components'), {recursive: true}, (error) => {
            if(error) {
                console.log(error)
            } else {
                console.log('created entire path')
            }
        })
    }
}

// const createFile = (input) => {fs.access(basePath, (error) => {
//     // To check if the given directory 
//     // already exists or not
//     let newPath = `${basePath}/${input}`
//     if (error) {
//       // If current directory does not exist
//       // then create it
//       fs.mkdir(newPath, (error) => {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("New Directory created successfully !!");
//         }
//       });
//     } else {
//       console.log("Given Directory already exists !!");
//     }
//   });
// }

if(argv.create === 'component') {
    // components
    createFile('components')
} 

if(argv.create === 'view') {
    // views
    console.log('view selected')
}

if(argv.create === 'route') {
    // router
    console.log('route selected')
} 

if(argv.create === 'store') {
    // store
    createFile()
}

if(!argv.create) {
    console.error('create flag required, creer --help for available options')
}

