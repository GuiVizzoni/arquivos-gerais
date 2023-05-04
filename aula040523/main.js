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