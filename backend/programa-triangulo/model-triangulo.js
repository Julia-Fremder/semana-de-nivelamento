const trianguloTeste = (lado1, lado2, lado3)=> {

    var resultado = "O triangulo com as medidas laterais: " + lado1 + ", "  + lado2 + ", " + lado3;

    if (lado1 == lado2 && lado1 == lado3) {

            return resultado += " e um triangulo Equilatero.";
        }; 
        
    if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {

            return resultado += " e um triangulo Escaleno.";
            
        } else { 

            return resultado+= " e um triangulo Isosceles";
        }
};

module.exports = {
    testeTriangulo: trianguloTeste,
}