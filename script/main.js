//diminui e aumenta a vida e faz o check se está morto ou enlouquecendo
function aumentarValor(inputId) {
  var input = document.getElementById(inputId);
  var valor = parseInt(input.value);
  valor = isNaN(valor) ? 0 : valor;
  valor++;
  input.value = valor;
  checkConditions(input.getAttribute('data-ch'));
}

function diminuirValor(inputId) {
  var input = document.getElementById(inputId);
  var valor = parseInt(input.value);
  valor = isNaN(valor) ? 0 : valor;
  valor--;
  input.value = valor;
  checkConditions(input.getAttribute('data-ch'));
}

//checar as condições
function checkConditions(character) {
  switch (character) {
    case 'E':
      checkDeath('hpE', 'sanidadeE', 'esforcoE', 'death', 'imageE');
      checkCrazy('sanidadeE', 'crazy');
      break;

    case 'K':
      checkDeath('hpK', 'sanidadeK', 'esforcoK', 'death', 'imageK');
      checkCrazy('sanidadeK', 'crazy');
      break;

    case 'Doc':
      checkDeath('hpDoc', 'sanidadeDoc', 'esforcoDoc', 'death', 'imageDoc');
      checkCrazy('sanidadeDoc', 'crazy');
      break;

    case 'U':
      checkDeath('hpU', 'sanidadeDoc', 'esforcoDoc', 'death', 'imageU');
      checkCrazy('sanidadeU', 'crazy');
      break;

    case 'V':
      checkDeath('hpV', 'sanidadeDoc', 'esforcoDoc', 'death', 'imageV');
      checkCrazy('sanidadeV', 'crazy');
      break;

    case 'W':
      checkDeath('hpW', 'sanidadeW', 'esforcoW', 'death', 'imageW');
      checkCrazy('sanidadeW', 'crazy');
      break;

    default:
      break;
  }
  //função de checar a morte
  function checkDeath(idHP, idSan, idEsf, idMsg, idImg) {
    const hpInput = document.getElementById(idHP);
    const mensagemElement = document.getElementById(idMsg);
    const sanInput = document.getElementById(idSan);
    const esfInput = document.getElementById(idEsf);
    const image = document.getElementById(idImg);
    if (parseInt(hpInput.value) === 0) {
      mensagemElement.style.display = 'block';
      showPopUp('death');
      sanInput.style.display = 'none';
      esfInput.style.display = 'none';
      hpInput.style.display = 'none';

      switch (idImg) {
        case 'imageE':
          image.src = "images/characters/dead/E_Dead.png";
          break;

        case 'imageK':
          image.src = "images/characters/dead/K_Dead.png";
          break;

        case 'imageDoc':
          image.src = "images/characters/dead/Doc_Dead.png";
          break;

        case 'imageU':
          image.src = "images/characters/dead/U_Dead.png";
          break;

        case 'imageV':
          image.src = "images/characters/dead/V_Dead.png";
          break;

        default:
          break;
      }

    } else {
      mensagemElement.style.display = 'none';
    }
  }
}

//checar se está morto
function checkCrazy(idSan, idMsg) {
  const sanidadeInput = document.getElementById(idSan);
  const mensagemElement = document.getElementById(idMsg);

  if (parseInt(sanidadeInput.value) === 0) {
    mensagemElement.style.display = 'block';
    showPopUp('crazy');
  } else {
    mensagemElement.style.display = 'none';
  }
}

//seção do botão de tela cheia
const fullscreenButton = document.getElementById('fullscreenButton');
const characterBoxes = document.querySelectorAll('.Character_Box');

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    characterBoxes.forEach(box => box.classList.add('fullscreen'));
    updateInputStyles(); // Chama a função para atualizar os estilos dos inputs
    fullscreenButton.textContent = 'Sair da Tela Cheia';
  } else {
    characterBoxes.forEach(box => box.classList.remove('fullscreen'));
    updateInputStyles(); // Chama a função para atualizar os estilos dos inputs
    fullscreenButton.textContent = 'Entrar em Tela Cheia';
  }
});

fullscreenButton.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(`Erro ao tentar entrar no modo de tela cheia: ${err.message}`);
    });
  } else {
    document.exitFullscreen().catch(err => {
      console.log(`Erro ao tentar sair do modo de tela cheia: ${err.message}`);
    });
  }
});

//função de mudar a posição do input quando entrar na tela cheia do botão
function updateInputStyles() {
  characterBoxes.forEach(box => {
    const inputs = box.querySelectorAll('.hp_input, .sanidade_input, .esforco_input');
    inputs.forEach(input => {
      if (box.classList.contains('fullscreen')) {
        input.style.top = input.getAttribute('data-fullscreen-top');
        input.style.left = input.getAttribute('data-fullscreen-left');
      } else {
        input.style.top = '';
        input.style.left = '';
      }
    });
  });
}

//função de mostrar o popup de morrendo e enlouquecendo
function showPopUp(id) {
  const popUp = document.getElementById(id);
  popUp.classList.add('show');
  setTimeout(() => {
    popUp.classList.remove('show');
    popUp.style.display = 'none'
  }, 10000);
}

//função de botão para revelar algum personagem
function toReveal() {
  const characterBox = document.getElementById('characterBoxW');
  const button = document.getElementById('revealB');
  characterBox.style.display = 'block';
  button.style.display = 'none';

}
