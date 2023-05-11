function inserirAluno() {
  var matricula = prompt("Digite sua matrícula:");
  var nome = prompt("Digite seu nome:");
  var qt_Faltas = parseFloat("Digite sua quantidade de faltas:");
  var notab1 = parseFloat(prompt("Digite sua nota do b1"));
  var notab2 = parseFloat(prompt("Digite sua nota do b2"));

  var percentual_faltas = qt_Faltas / total_aulas;
  media = (notab1 + notab2) / 2;
  alert("A nota do aluno é: " + media);
  if (media <= 7) {
    alert("Prova de Recuperação");
    var nota_pr = parseFloat(prompt("Digite sua nota da pr"));
    media_final = (nota_pr + media) / 2;
    if (media_final >= 5) {
      alert("Parabéns! você passou! (estude mais!)");
    } else {
      alert("Reprovado.");
      var situacao = "Reprovado"
    }
  } else {
    alert("Parabéns! você passou!");
  }
  var situacao = parseFloat(prompt("Situação: " + situacao));

  //LÓGICA DE NEGÓCIO

  var tabela = document.querySelector("body > table");

  var linha = tabela.insertRow(-1);

  linha.insertCell(0).innerText = matricula;
  linha.insertCell(1).innerText = nome;
  linha.insertCell(2).innerText = qt_Faltas;
  linha.insertCell(3).innerText = notab1;
  linha.insertCell(4).innerText = notab2;
  linha.insertCell(5).innerText = media;
  linha.insertCell(6).innerText = nota_pr;
  linha.insertCell(7).innerText = media_final;
  linha.insertCell(8).innerText = situacao;
}
