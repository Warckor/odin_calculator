const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')
let firstNumber = 0
let secondNumber = 0
let operator = ''

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
    case '÷':
      return divide(a, b)
  }
}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const buttonId = e.target.id
    const value = e.target.textContent
    if (display.value === 'Error') {
      display.value = ''
    }
    if (buttonId === 'clear') {
      display.value = ''
      firstNumber = 0
      secondNumber = 0
      operator = ''
    } else if (buttonId === 'backspace') {
      display.value = display.value.slice(0, -1)
    } else if (buttonId === 'divide') {
      operator = value
      firstNumber = display.value
      display.value = ''
    } else if (buttonId === 'multiply') {
      operator = value
      firstNumber = display.value
      display.value = ''
    } else if (buttonId === 'subtract') {
      operator = value
      firstNumber = display.value
      display.value = ''
    } else if (buttonId === 'add') {
      operator = value
      firstNumber = display.value
      display.value = ''
    } else if (buttonId === 'equals') {
      if (operator === '') {
        display.value = 'Error'
      } else {
        secondNumber = display.value
        display.value = operate(Number(firstNumber), Number(secondNumber), operator)
        firstNumber = 0
        secondNumber = 0
        operator = ''
      }
    } else {
      display.value += value
    }
  })
})
