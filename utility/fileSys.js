const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

async function readFile(filename){
    return new Promise((resolve,reject) => {
        fs.readFile(filename,'utf8', (err,data) => {
            if(err){
                console.log("Failed to read the file!");
                reject(err);
            }
            else{
                console.log("File read successfully!");
                resolve(data);
            }
        });
    });
}

async function createFile(filename){
    return new Promise((resolve,reject) => {
        fs.writeFile(filename,'Initial Data', (err,data) => {
            if(err){
                console.log("Failed to create the file!");
                reject(err);
            }
            else{
                console.log("File created successfully!");
                resolve(err);
            }
        })
    });
}

module.exports.create = createFile;
module.exports.read = readFile;