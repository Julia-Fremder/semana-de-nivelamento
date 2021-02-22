var alunosCadastrados = [];

const cadastrar = (pessoa) => {alunosCadastrados.push(pessoa)};


const procurarCadastrar = (pessoa) => {
    
const existeAluno = (alunoN) => {alunosCadastrados.some(pessoa => pessoa.nome === alunoN.nome)};

    if (existeAluno){
        console.log('Aluno já cadastrado')
    } else {cadastrar(pessoa)}
    console.log(alunosCadastrados);

}


module.exports = {
    cadastro: procurarCadastrar,
    cadastrados: alunosCadastrados

}
//let hasMagenicVendor = vendors.some( vendor => vendor['Name'] === 'Magenic' )

    
