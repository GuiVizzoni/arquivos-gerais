

var notaProva = parseFloat(prompt('Digite a nota da prova'))

var notaProjeto = parseFloat(prompt('Digite a nota do projeto'))

var media = notaProva * 0.7 + notaProjeto * 0.3

//calcular quanto falta no B2 para o aluno ser aprovado

var Mediafaltante = 14 - media

if (media >= 7) {
    alert ('Parabéns! Você está acima da média')
} else {
    alert ('Você precisa caprichar mais nos estudos!')
}

alert('Sua média foi: ' + media + ', faltam' + Mediafaltante + ' pontos pra passar')