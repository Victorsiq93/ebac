function validarFormulario() {
    // Obtendo os valores dos campos A e B
    var valorA = document.getElementById("campoA").value;
    var valorB = document.getElementById("campoB").value;

    // Convertendo os valores para números
    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);

    // Verificando se B é maior que A
    if (valorB > valorA) {
      alert("Formulário válido! B é maior que A.");
    } else {
      alert("Formulário inválido! Certifique-se de que B é maior que A.");
    }
  }