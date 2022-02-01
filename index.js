#! /usr/bin/env node

// add the page with the .vue extension

const fs = require("fs");
  
// const path = "./new-Directory"

const args = process.argv.slice(2);
const typePassed = process.argv[0]
const types = ['component', 'view', 'route', 'store']

let cont = false;

//check the first flag is create
function checkFlag(something) {
    let splitThem = something[0].split(':')
    if(splitThem[0] !== 'create') {
       return console.error('command must start with create:<something> use --help for more options')
    } else {
        return console.log(`now creating ${splitThem[1]} ...`)
    }
}

checkFlag(args);

// get whether its a component/view/route/store
function getType(something) {
    let splitThem = something[0].split(':')
    return splitThem[1];
}

types.forEach((type) => {
    if(type === typePassed) {
        cont = true
    }
})
  
// fs.access(path, (error) => {
//   // To check if the given directory 
//   // already exists or not
//   if (error) {
//     // If current directory does not exist
//     // then create it
//     fs.mkdir(path, (error) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("New Directory created successfully !!");
//       }
//     });
//   } else {
//     console.log("Given Directory already exists !!");
//   }
// });

// if(cont) {
//     console.log(`${typePassed} will now be created`)
// } else {
//     console.log('bad luck pal')
// }

// console.log(args[0].split(':'))

console.log(getType(args))
