const fs = require('fs');
const colors = require('colors');

// const fs = require('express');
// const fs = require('./fs');


let listTable = async(base, limite = 10) => {

    console.log('================='.green.bgBlue);
    console.log(`== table of ${base} ==`.green.bgBlack);
    console.log('================='.green.bgBlack);

    if (!Number(base)) {
        throw new console.Error(`${base} no is a number`);
    }
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}



let createFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base } no is a number`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`.green);
        });
    });
}

module.exports = {
    createFile,
    listTable
}