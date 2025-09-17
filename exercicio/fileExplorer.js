const fs = require('fs');
const path = require('path');

//Lista todos os recursos
async function listarArquivos(diretorio) {
    console.log(`Explorando: ${diretorio}`);

    //Array que encontra arquivos encontrado
    const arquivos = [];

    try{
        //Lê o conteúdo do diretório (lista tudo)
        const items = await fs.readdir(diretorio);
        console.log(`Encontrados ${items.lenght} itens em: ${diretorio}`);
    }catch(error)
}