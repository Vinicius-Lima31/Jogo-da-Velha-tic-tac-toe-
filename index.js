// Todos os <button>
const btnGame = document.querySelectorAll('#gv button')

// <h2>
const h2 = document.getElementById('currentPlayer')

// Array que guarda todas jogadas
let playerArray = []

// Player inicial
let player = 'X'

// Player X
let playerX = []

// Player O
let playerO = []

// Variavel feita para conferir se o jogo vai dar velha ou não
let velha

// Clicar e marcar no <button>
btnGame.forEach(function(element) {
  element.addEventListener('click', clickButton)
})

// Verificar Vencedor
function winner(array) {
  velha = playerArray
  velha = velha.filter(check)

  if(array[0] && array[1] && array[2]) {
    applyClass(0, 1, 2)
    h2.innerHTML = `${array[0]} Venceu`
    timeOut(array)
    return true
  } 

  else if(array[3] && array[4] && array[5]){
    applyClass(3, 4, 5)
    h2.innerHTML = `${array[3]} Venceu`
    timeOut(array)
    return true
  }

  else if(array[6] && array[7] && array[8]) {
    applyClass(6, 7, 8)
    h2.innerHTML = `${array[6]} Venceu`
    timeOut(array)
    return true
  }

  else if(array[0] && array[4] && array[8]) {
    applyClass(0, 4, 8)
    h2.innerHTML = `${array[0]} Venceu`
    timeOut(array)
    return true
  }

  else if(array[2] && array[4] && array[6]) {
    applyClass(2, 4, 6)
    h2.innerHTML = `${array[2]} Venceu`
    timeOut(array)
    return true
  }
  
  else if(array[0] && array[3] && array[6]) {
    applyClass(0, 3, 6)
    h2.innerHTML = `${array[0]} Venceu`
    timeOut(array)
    return true
  }

  else if(array[1] && array[4] && array[7]) {
    applyClass(1, 4, 7)
    h2.innerHTML = `${array[1]} Venceu`
    timeOut(array)
    return true
  }

  else if(array[2] && array[5] && array[8]) {
    applyClass(2, 5, 8)
    h2.innerHTML = `${array[2]} Venceu`
    timeOut(array)
    return true
  }

  else if(velha.length === 9) {
    h2.style.opacity = 1
    
    // Peguei todos os <button> e troquei sua cor para um vermelho
    btnGame.forEach(drawStyle)
    h2.innerHTML = `Deu velha!`
    timeOut(array)
  }

}

// Função para clicar nos <button>
function clickButton(ev) {
  // btn -> Seria o <button>
  const btn = ev.currentTarget

  console.log(btn.dataset.i)

  // position -> o valor do data do HTML
  const position = btn.dataset.i

  // Confiro se a posição já foi preenchida ou não

  console.log(`Cliquei no <button> ${position}`)

  btn.innerHTML = player
  playerArray[position] = player

  player = player !== 'X' ? 'X' : 'O'
  console.log(playerArray)
  btn.style.backgroundColor = "#B0C4DE";
  btn.classList.remove('pointer')

  btn.removeEventListener('click', clickButton)

  // Quis dar um leve timer para adicionar a função
  setTimeout(() => {
    addElement()
  }, 100);

}

// Trocar estilo dos <button> em caso de empate
function drawStyle(element) {
  element.style.backgroundColor = "#8B0000"
}

// Adicionar X ou O nos <button>
function addElement () {
  playerArray.forEach(addElementPlayer)

    if(winner(playerX)) {
      // return para já finalizar e não conferir o playerO
      return
    }
    winner(playerO)
}

function timeOut(array) {
  setTimeout(() =>{
    // serve para recarregar a página
    location.reload() 

  }, 2000) // 2 segundos
}

function addElementPlayer(element, index) {
  // o if foi necessario caso o X ganhe, ele não necessite que a verificação do O seja feita
  if(element === 'X') {
    console.log(`Elemento X nas Posições: ${index}`)
    playerX[index] = 'X'
  }
  else if (element === 'O') {
    console.log(`Elemento O nas Posições: ${index}`)
    playerO[index] = 'O'
  }
}

// Aplicando class
function applyClass(x, y, z) {
  h2.style.opacity = 1
  btnGame.forEach(function(element, index) {
    if(index === x || index === y || index === z) {
      element.classList.add('green')
    }
  })
}

// filter() para checar velha
function check(element) {
  return element === 'X' || element === 'O'
}