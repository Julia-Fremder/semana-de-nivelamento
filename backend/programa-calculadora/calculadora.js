const operacaoMatematica = (oper, a, b) => {

 switch(oper) { 
     case 1:
         console.log( `A soma de ${a} mais ${b} é igual a ${a+b}.\n`);
      break;
      case  2:
        console.log(`O resultado de ${a} menos ${b} é igual a ${a-b}.\n`);
      break;
      case  3:
        console.log(`O resultado da multiplicação de ${a} por ${b} é igual a ${a*b}.\n`);
      break;
      case  4:
        console.log(`O resultado da divisão de ${a} por ${b} é igual a ${a/b}.\n`);
      break;
      default:
        console.log(`Não escolheu operação válida.`);
    };
    
};




module.exports = {
  calcMath: operacaoMatematica,

}