const readLine = require('readline-sync');

function comercio() {

    var start = true;

    while(start) {
        
    const menu = readLine.question("1 - cadastrar nova venda\n2 - desligar programa:\n")
        
        switch (menu){
            case '1':
                var novoProd = true;
                
                while(novoProd){
                    
                    const menuCarrinho = readLine.question("1 - adicionar novo item\n2 - finalizar venda");
                    
                    switch(menuCarrinho){
                        case '1':
                            break;
                        
                        case '2':
                            console.log("Finalizar a venda.");
                        break;
                    }
                    
























                break;
            case '2':
                start = false;
                console.log("Desligar...")
                break;
            default:
              console.log('opção inexistente');
              break;  
        }

    }
    



}





comercio();