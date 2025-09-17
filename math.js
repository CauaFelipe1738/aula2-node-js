function somar(a, b){
    console.log(`Somando ${a} + ${b}`);
    return a + b;
}

function multiplicar(a, b){
    console.log(`Multiplicando ${a} * ${b}`);
    return a * b;
}

function dividir(a, b){
    if (b === 0){
        console.log('Erro: Não é possível dividir por zero!');
        return null;
    }
    console.log(`Divindo ${a} / ${b}`);
    return a / b;
}

module.exports = {somar, multiplicar, dividir};
