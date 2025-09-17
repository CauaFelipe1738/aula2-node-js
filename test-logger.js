const Logger = require('./logger');

async function testarLogger() {
    console.log('Iniciando o teste logger');

    //cria arquivo que salva o teste
    const logger = new Logger('teste.log');

    await logger.info('Aplicação iniciada com suceso!');
    await logger.warn('Esta é uma mensagem de aviso');
    await logger.error('Simulando um erro de teste');

    console.log('Teste concluído! Verifique o teste.log')
}

testarLogger();