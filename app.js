/*
const math = require('./math.js');
console.log('=== TESTANDO NOSSO MÓDULO MATEMÁTICA ===');

const resultadoSoma = math.somar(10, 5);
console.log(`Resultado: ${resultadoSoma}`);

const resultadoMultiplicacao = math.multiplicar(4, 7);
console.log(`Resultado: ${resultadoMultiplicacao}`);

const resultadoDivisao = math.dividir(20, 4);
console.log(`Resultado da divisão: ${resultadoDivisao}`);

const divisaoporZero = math.dividir(10, 0);
console.log(`Divisão por zero ${divisaoporZero}`);*/

import { cumprimentar, calcularIdade, PI} from './utils.js';

import despedir from './utils.js';

console.log('===TESTANDO O ES6 MODULE===');

console.log(cumprimentar('Maria'));
console.log('Idade: ', calcularIdade(1999));
console.log('Valor de PI: ', PI);

console.log(despedir('Maria'));

console.log('=== TESTE CONCLUÍDO ===');