const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')
let firstNumber = 0
let secondNumber = 0

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const operate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return subtract(a, b)
    case '*':
      return multiply(a, b)
    case '/':
      return divide(a, b)
  }
}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const buttonId = e.target.id
    const value = e.target.textContent
    if (buttonId === 'clear') {
      display.value = ''
      firstNumber = 0
      secondNumber = 0
    } else if (buttonId === 'backspace') {
      display.value = display.value.slice(0, -1)
    } else if (buttonId === 'divide') {
      if (firstNumber !== 0) {
        secondNumber = display.value
      }
      firstNumber = display.value
    } else if (buttonId === 'multiply') {
      if (firstNumber !== 0) {
        secondNumber = display.value
      }
      firstNumber = display.value
    } else if (buttonId === 'subtract') {
      if (firstNumber !== 0) {
        secondNumber = display.value
      }
      firstNumber = display.value
    } else if (buttonId === 'add') {
      if (firstNumber !== 0) {
        secondNumber = display.value
      }
      firstNumber = display.value
    } else if (buttonId === 'equals') {
      firstNumber = 0
      secondNumber = 0
    } else {
      display.value += value
    }
  })
})
