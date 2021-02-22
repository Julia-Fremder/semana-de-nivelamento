const readLine=require("readline-sync");
const trianguloModel = require('./model-triangulo')

console.log('Bem vindo ao mundo dos triângulos!')

var lado1 = readLine.question('Atribua valor para o primeiro lado do triângulo: \n');
var lado2 = readLine.question('Atribua valor para o segundo lado do triângulo: \n');
var lado3 = readLine.question('Atribua valor para o terceiro lado do triângulo: \n');

console.log(trianguloModel.testeTriangulo(lado1, lado2, lado3));

console.log('Fim do programa');