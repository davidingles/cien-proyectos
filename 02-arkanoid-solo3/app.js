const canvas = document.querySelector('canvas')
const $PALA = document.querySelector('#pala')
const ctx = canvas.getContext('2d')
canvas.width = 222
canvas.height = 222
//VARIABLES BOLA
let dx = 2
let dy = -2
const radiusBall = 11
let positionBallX = (canvas.width - radiusBall) / 2
let positionBallY = (canvas.height - radiusBall - 11)
//VARIABLES PALA
const palaWidth = 44
const palaHeight = 14
let palaX = (canvas.width - palaWidth) / 2
let palaY = canvas.height - 11
let keyPressedLeft = false
let keyPressedRight = false
function dibujoLadrillos() {
  let ladrillos = []
  for (let c = 0; c < 8; c++) {
    ladrillos[c] = []
    for (let r = 0; r < 5; r++) {
      let bricksX = c * 22
      let bricksY = r * 11

      ctx.rect(
        bricksX,
        bricksY,
        20,
        8
      )
      ctx.fillStyle = 'red'
      ctx.fill()
    }
  }
}
function dibujoPelota() {
  ctx.beginPath()
  ctx.arc(positionBallX, positionBallY, radiusBall, 0, 360)
  ctx.fillStyle = '#f0f'
  ctx.fill()
  ctx.closePath()
}
function dibujoPala() {
  ctx.drawImage(
    $PALA,
    30,
    174,
    44,
    14,
    palaX,
    palaY,
    44,
    14
  )

}
function ballMovement() {
  if (positionBallX > canvas.width - radiusBall) {
    dx = -dx
  }
  if (positionBallY < radiusBall - radiusBall) {
    dy = -dy
  }
  if (positionBallX < radiusBall - radiusBall) {
    dx = -dx
  }
  if (positionBallY > canvas.height - radiusBall) {
    console.log('game over')
  }
  positionBallX += dx
  positionBallY += dy
}
function cleanCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function palaMovement() {
  if (keyPressedRight && palaX < (canvas.width - palaWidth)) {
    palaX += 4
  } else if (keyPressedLeft && palaX > 0) {
    palaX += -4
  }
}
function initEvents() {
  document.addEventListener('keydown', handlerKeyDown)
  document.addEventListener('keyup', handlerKeyUp)
}
function handlerKeyDown(e) {
  if (e.key === 'right' || e.key === 'ArrowRight') {
    keyPressedRight = true
  } else if (e.key === 'left' || e.key === 'ArrowLeft') {
    keyPressedLeft = true
  }
}
function handlerKeyUp(e) {
  if (e.key === 'right' || e.key === 'ArrowRight') {
    keyPressedRight = false
  } else if (e.key === 'left' || e.key === 'ArrowLeft') {
    keyPressedLeft = false
  }
}

function animation() {
  window.requestAnimationFrame(animation)
  cleanCanvas()
  dibujoPelota()
  dibujoLadrillos()
  ballMovement()
  dibujoPala()
  palaMovement()
}
initEvents()
animation()