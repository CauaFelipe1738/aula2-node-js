const {listarArquivos, mostrarResultado} = require('./fileExplorer');
const path = require('path');

async function testarExplorer(){
    console.log('Iniciando teste do Explorador de arquivos...');

    const pastaAtual = __dirname
    console.log(`Pasta a ser explorada: ${pastaAtual}`);

    try{
        //executa exploração
        const arquivos = await listarArquivos(pastaAtual);

        //mostra resultados
        mostrarResultado(arquivos);
        console.log('\nTeste concluído com sucesso!');
    }catch(error){
        console.log('Erro durante o teste: ', error.message);
    }
}

testarExplorer();