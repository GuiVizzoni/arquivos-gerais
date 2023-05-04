function calcularIMC(){

//imc = peso / altura * altura
var peso = parseFloat(prompt('Digite seu peso (em quilos)'))
var altura = parseFloat(prompt('Digite a sua altura (em metros)'))
var imc = peso/(altura**2)

alert ('seu imc é: ' + imc)
}

calcularIMC()



//Calcular IMC v3

function calcularIMCv3(peso, altura){
    var inicio = new Date()
    for(let i = 0 ; i < 1000000; i++)
    imc = peso / (altura*altura)
    var fim = new Date()
    console.log('O algoritmo rodou em: ' + (fim-inicio) + ' ms')

}

//calcular o imc com if e else

function calcularIMC() {

    //imc = peso / altura * altura
    var peso = parseFloat(prompt('Digite seu peso (em quilos)'))
    var altura = parseFloat(prompt('Digite a sua altura (em metros)'))
    var imc = peso / (altura ** 2)

    alert('seu imc é: ' + imc)

    if (imc >= 18) {
        alert('Você está no peso normal.')
    }
    if (imc >= 18) {
        alert('Você está no peso normal.')
    }

    if (imc <= 25 && >= 29.99) {
        alert('Você está na pré obesidade.')
    }

    if (imc <= 30 && >= 34.99) {
        alert('Você está na obesidade de grau I.')
    }

    if (imc <= 35 && >= 39.99) {
        alert('Você está na obesidade de grau II.')
    }

    if (imc >= 40) {
        alert('Você está na obesidade de grau III.')
        
    } else {
        alert('Esse peso n existe')
    }
}

calcularIMC()
