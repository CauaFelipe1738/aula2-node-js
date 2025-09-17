const fs = require('fs').promises;

//verifica se o arquivo existe
async function verificarArquivo(nomeArquivo) {
    try{
        console.log(`Verificando se "${nomeArquivo}" existe!`);

        await fs.access(nomeArquivo);

        console.log(`O arquivo "${nomeArquivo}" existe!`);
        return true;
    }catch(error){
        console.log(`O arquivo "${nomeArquivo}" NÃO existe`);
        return false;
    }
}

//Função que testa os arquivos
async function testarArquivos() {
    console.log('=== VERIFICANDO ARQUIVOS ===');

    const arquivos = [
        'dados.txt',
        'arquivo-criado.txt',
        'arquivo-inexistente.txt',
        'package.json'
    ];

    for (const arquivo of arquivos) {
        await verificarArquivo(arquivo)
        console.log('');
    }

    console.log('===VERIFICAÇÃO CONCLUÍDA===');
}

testarArquivos();