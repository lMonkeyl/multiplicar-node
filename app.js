const { createFile, listTable } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listTable(argv.base, argv.limite);
        break;

    case 'crear':
        createFile(argv.base, argv.limite)
            .then(archivo => console.log(`The file has been created: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}



// let parametro = argv[2];
// let base = parametro.split('=')[1] //Convierte de un string a un array


// console.log(base);