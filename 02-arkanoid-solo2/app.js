const ballRadius = 4
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 600
let x = canvas.width / 2
let y = canvas.height - 30
let dx = 2
let dy = -2

const paddleWidth = 44
const paddleHeight = 10
let paddleX = (canvas.width - paddleWidth) / 2
let paddleY = (canvas.height - paddleHeight) - 10

function ballMovement() {
  if (x + dx > canvas.width - ballRadius) {
    dx = -dx
  }
  if (y + dy < ballRadius) {
    dy = -dy
  }
  if (x + dx < ballRadius) {
    dx = -dx
  }
  if (y + dy > canvas.height) {
    console.log('game over')
    // window.location.reload()
  }
  x = x + dx
  y = y + dy
}
function drawBall() {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, 360)
  ctx.fillStyle = '#fff'
  ctx.fill()
}
function drawPaddle() {
  ctx.fillRect(
    paddleX,
    paddleY,
    paddleWidth,
    paddleHeight,
  )
  ctx.fill

}
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function animation() {
  window.requestAnimationFrame(animation)
  drawPaddle()
  clearCanvas()
  drawBall()
  ballMovement()
}

animation()