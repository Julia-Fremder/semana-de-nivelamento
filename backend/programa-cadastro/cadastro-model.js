//imports
const readLine = require('readline-sync');

listaAlunos = [];

function dadoObrigatorio(nomeCampo){

    var dado = '';

    while (dado === '') {
    
        dado = readLine.question(`Digite ${nomeCampo}: `);
        
        if(!dado){
            console.log('Esse dado é obrigatório');
        } 

    } 
    
    return dado;
}

function main(){
    console.log('início do programa');

    var start = true;

    while(start) {

        console.log("1 - cadastrar um aluno");
        console.log("2 - exibir todos os alunos");
        console.log("3 - desligar");

        const opcao = readLine.question('Escolha uma opcao:')

        switch(opcao) {

            case '1': 

                console.log('escolheu cadastrar');
                const nome = dadoObrigatorio("Nome");
                const dataNascimento = dadoObrigatorio("Data Nascimento");
                const sexo = readLine.question('digite seu sexo: ');

                listaAlunos.push({id: listaAlunos.length + 1
                    , nome, dataNascimento, sexo})
                break;
            case '2': 
                console.log('exibir a lista de alunos');

                break;
            
            case '3': 
                console.log('desligar');
                start = false;
                break;
            
            default:
                console.log('opção inexistente');
                break;
        }
    }
}
main();