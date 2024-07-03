function receberInformacoes() {
    // Obter os valores dos campos de entrada
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value) / 100;
    
    let imc = peso / (altura*altura)

    document.getElementById("resultado").innerHTML = "O seu IMC é de: " + imc.toFixed(2)

    if (imc.toFixed(2) < 18.5) {
        document.body.style.backgroundColor = 'yellow'
        document.getElementById("descricao-imc").innerHTML = 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.body.style.backgroundColor = 'green';
        document.getElementById("descricao-imc").innerHTML = 'Peso ideal'
    } else {
        document.body.style.backgroundColor = 'red';
        document.getElementById("descricao-imc").innerHTML = 'Acima do peso'
    }
}
