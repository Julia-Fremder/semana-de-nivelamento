const readLine=require("readline-sync");
const validacaoPar = require("./validacao-par");
const validacaoPrimo = require ("./validacao-primo");

const numX = readLine.question('Escolha um numero e verifique se ele e par ou impar: \n');

validacaoPar.parImpar(numX);

var numY = readLine.question('Agora escolha outro numero para verificar se ele e primo: \n');

validacaoPrimo.testePrimo(numY);

console.log('Fim do programa');