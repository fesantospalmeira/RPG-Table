

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

  function toReveal() {
    var image = document.getElementById("character");
    var btn_rev2 = document.getElementById("btn_revealV2");
    
    image.src ="images/characters/Venator.png"
    btn_rev2.remove();
  }

  function revealBlur() {
    var btn_rev = document.getElementById("btn_revealV");
    const characterBox = document.querySelector('.Character_Box_Venator');
    var btn_rev2 = document.getElementById("btn_revealV2");
    
    characterBox.style.display = 'block';
    btn_rev2.style.display = 'block';
    btn_rev.remove();
  }
