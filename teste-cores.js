const colors = require('colors');

function testarCores() {
    console.log('🎨 Testando pacote colors');

    console.log('Esse texto é vermelho'.red);
    console.log('Esse texto é verde'.green);
    console.log('Esse texto é azul'.blue);
    console.log('Esse texto é colorido'.rainbow);

    console.log('Esse texto é sublinhado'.underline);
    console.log('Esse texto está em negrito'.bold);
    console.log('Esse texto é invertido!'.inverse);

    
    console.log('Texto vermelho e negrito'.red.bold);

}

testarCores();