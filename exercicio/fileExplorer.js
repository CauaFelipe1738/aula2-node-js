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

        //Para cada item encontrado
        for (const item of items){
            //monta o caminho completo
            const fullPath = path.join(diretorio, item);

            //Pega as informações sobre o item
            const stats = await fs.stat(fullPath);

            //se for pasta
            if(stats.isDirectory()){
                console.log(`Pasta encontrada: ${item}`);
                //repete a função para dentro da pasta
                const subArquivos = await listarArquivos(fullPath);

                //Adiciona os itens ao array
                //espalha os elementos como caixas dentro de outra
                arquivos.push(...subArquivos);
            }else{
                console.log(`Arquivo encontrado: ${item}`);
                arquivos.push(fullPath);
            }
        }
    }catch(error){
        console.error(`Erro ao explorar ${diretorio}: `, error.message);
    }

    return arquivos;
}

function mostrarResultados(arquivos){
    console.log('\nRELATÓRIO FINAL: ');
    console.log(`Total de arquivos encontrados: ${arquivos.lenght}`);

    if(arquivos.lenght > 0){
    arquivos.forEach((arquivo, index) => {
        console.log(`${index + 1}. ${arquivo}`);
    });}
}

module.exports = {
    listarArquivos,
    mostrarResultados
};