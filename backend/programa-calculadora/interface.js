const readLine=require("readline-sync");
const calculadora = require("./calculadora");


var a = 0;
var b = 0;
var oper = parseFloat(readLine.question(console.log('Escolha uma operacao: 1 - Somar | 2 - Subtrair | 3 - Multiplicar | 4 - Dividir | -1 Sair ')));

while (oper !== -1) {
        
    var a = a + parseFloat(readLine.question(console.log('Selecione o primeiro valor para cálculo:')));
    var b = b + parseFloat(readLine.question(console.log('Selecione o segundo valor para cálculo:')));
    if (oper == 4 && b == 0) {
        var b = b + parseFloat(readLine.question(console.log('Selecionou Zero para divisor, escolha outro valor para cálculo:')));
    }
    calculadora.calcMath(oper, a, b);
    var oper = parseFloat(readLine.question(console.log('Escolha uma operacao: 1 - Somar | 2 - Subtrair | 3 - Multiplicar | 4 - Dividir | -1 Sair ')));

}; console.log('Encerrou a calculadora.')





        
