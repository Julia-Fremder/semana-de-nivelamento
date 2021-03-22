//imports
const readLine = require('readline-sync');

const listaAlunos = [];

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

function verificarNome(nome) {
    const nomeRepetido = listaAlunos.some((item) => {
        return item.nome === nome
    });

    return nomeRepetido
}

function main(){
    console.log('início do programa');

    var start = true;

    while(start) {

        console.log("\n1 - cadastrar um aluno");
        console.log("2 - exibir todos os alunos");
        console.log("3 - desligar");

        const opcao = readLine.question('Escolha uma opcao:')

        switch(opcao) {

            case '1': 

                console.log('escolheu cadastrar');
                const nome = dadoObrigatorio("Nome");
                const repetido = verificarNome(nome);

                    if(repetido){
                        console.log("\nUsuário já cadastrado.")
                    } else {

                    const dataNascimento = dadoObrigatorio("Data Nascimento");
                    const sexo = readLine.question('digite seu sexo: ');

                    listaAlunos.push({id: listaAlunos.length + 1, nome, dataNascimento, sexo})
                    }

                break;
            case '2': 
                console.log('Exibir a lista de alunos.');
                
                listaAlunos.forEach((item) => {
                    console.log(`${item.id} - ${item.nome}`);
                });


                break;
            
            case '3': 
                console.log('Desligar...\n');
                start = false;
                break;
            
            default:
                console.log('Opção inexistente.\n');
                break;
        }
    }
}
main();