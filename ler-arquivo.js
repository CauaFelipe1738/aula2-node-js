const fs = require('fs').promises;

async function lerMeuArquivo() {
    try{
        console.log('Lendo arquivo..');

        const conteudo = await fs.readFile('leia-me.txt', 'utf-8');

        console.log('Está feito:');
        console.log('-'.repeat(30));
        console.log(conteudo);
        console.log('_'.repeat(30));
    }catch(error){
        console.log('Algo de errado aconteceu', error.message);

        if(error.code === 'ENOENT'){
            console.log('O arquivo "leia-me.txt" não existe!');
            console.log('Tente criar o arquivo na mesma pasta que esse código!')
        }
    }
}

lerMeuArquivo();