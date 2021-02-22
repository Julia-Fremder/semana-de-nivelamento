const readLine=require("readline-sync");
const alunos = require("./lista-alunos");


console.log('Preencha a lista de presencas dos alunos com 1 para presente e 2 para ausente:')

listaPresenca = alunos.lista.map(item => { 
            const lista = {};
        
            lista[item.nome] = item.nome;
            
            if (readLine.question(`O(a) aluno(a)  ${item.nome} está presente?\n`) == 1) {
            lista.presenca = 'presente';
            } else lista.presenca = 'ausente';

            return lista;
            
        })

console.log(listaPresenca);