function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let simNao = 'não';

    if (num1 === num2) {
        simNao = '';
    }

    return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let comparaQuarenta = 'menor';
    let comparaTrinta = 'menor';

    if (soma >40) {
        comparaDez = 'maior';
    }

    if (soma > 30) {
        comparaTrinta= 'maior';
    }

    return `Sua soma é ${soma}, que é ${comparaQuarenta} do que 40 e ${comparaTrinta} do que 30.`;
}

console.log(comparaNumeros(40,70));
