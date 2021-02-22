const readLine = require('readline-sync');
const cadastroModel = require('./cadastro-model')

let oper = readLine.question('Digite 1 para cadastrar novos alunos ou 2 para exibir os alunos cadastrados:\n')

while(oper!=2) {
    const name = readLine.question('preencha o nome do aluno: \n');
    const dataNascimento = readLine.question('preencha a data de nascimento: \n');
    const sexo = readLine.question('preencha F para mulher e M para Homem: \n');
    const alunoNovo = {nome:name, dataNascimento:dataNascimento, sexo:sexo};

cadastroModel.cadastro(alunoNovo);
oper = readLine.question('Digite 1 para cadastrar novos alunos ou 2 para exibir os alunos cadastrados:\n')
} console.log(cadastroModel.cadastrados);