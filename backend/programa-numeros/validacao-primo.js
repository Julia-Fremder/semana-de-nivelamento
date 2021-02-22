const testePrimo = (numero) => {
    var divisoes = 0;

    for (var i = 2; i < (numero/2); i++) {

        if (numero % i == 0) {
            divisoes++
        }
    }

    if (divisoes == 0) {
            console.log('O numero e primo.')
        } else {
            console.log('O numero nao e primo.')
        }

}
module.exports = {
    testePrimo : testePrimo
}