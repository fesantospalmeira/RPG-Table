

function aumentarValor(inputId) {
    var input = document.getElementById(inputId);
    var valor = parseInt(input.value);
    valor = isNaN(valor) ? 0 : valor;
    valor++;
    input.value = valor;
  }
  
  function diminuirValor(inputId) {
    var input = document.getElementById(inputId);
    var valor = parseInt(input.value);
    valor = isNaN(valor) ? 0 : valor;
    valor--;
    input.value = valor;
  }


