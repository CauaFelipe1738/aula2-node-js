const fs = require('fs').promises;

async function escreverMeuArquivo() {
    try{
        console.log('Criando um novo arquivo...');

        //Conteudo para escrever
        const meuTexto = `Arquivo criado pelo Node.js!\nData: ${new Date().toLocaleString()}\nEste  arquivo foi gerado automaticamente`;

        await fs.writeFile('arquivo-criado.txt', meuTexto, 'utf-8');
        
        console.log('Arquivo criado "arquivo-criado.txt"!');
        console.log('Conteúdo escrito: ');
        console.log('-'.repeat(30));
        console.log(meuTexto);
        console.log('-'.repeat(30));
    }catch(error){
        console.log('Erro ao escrever o arquivo:', error.message)
    }
}

escreverMeuArquivo();