const readLine=require("readline-sync");
const nomeFunc = require('./nome-model');

var nome = readLine.question("Qual e o seu nome? ")

nomeFunc.funcaoNome(nome);

