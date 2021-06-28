const numberButtons = document.querySelectorAll([".number"])


const operatorButtons = document.querySelectorAll(".orange")
// console.log(button);
const currentAnswer = document.querySelector(".answer")
const prevAnswer = document.querySelector('.prev')

const equalButton = document.querySelector('.equal')
const delButton = document.querySelector('.del')
const acButton = document.querySelector('.all-clear')



class Calculator {
    constructor(currentAnswer, prevAnswer) {
        this.currentAnswer = currentAnswer
        this.prevAnswer = prevAnswer
        this.clear()
    }
    clear() {
        this.currentOper = ""
        this.prevOper = ""
        this.operation = undefined
    }

    delete() {

    }

    append(number) {
        if (number === '.' && this.currentOper.includes('.')) return
        
        this.currentOper = this.currentOper.toString() + number.toString()
    }

    chooseOrange(operation) {
        if (this.currentOper === '') return
        if (this.prevAnswer !== '') {
            this.compute()
        }
        this.operation = operation
        this.prevOper = this.currentOper
        this.currentOper = ''
    }

    compute() {
        let theResults
        const previously = parseFloat(this.prevOper)
        const currently = parseFloat(this.currentOper)
        if (previously == '' || currently == '') return
        switch (this.operation) {
            case '+':
                theResults = previously + currently
                break;
            case '-':
                theResults = previously + currently
                break;
            case '*':
                theResults = previously * currently
                break;
            case '÷':
                theResults = previously / currently
                break;
            
            default:
                return;
        }
        this.currentOper = theResults
        this.operation = undefined
        this.prevOper = ''
    }

    updateDisplay() {
        this.currentAnswer.innerText = this.currentOper
        this.prevAnswer.innerText = this.prevOper
    }

}


const calculator = new Calculator(currentAnswer, prevAnswer) 

numberButtons.forEach((button) => {
    button.addEventListener(('click'), () => {
        calculator.append(button.innerText)
        calculator.updateDisplay()
    } )
} )

operatorButtons.forEach((button) => {
    button.addEventListener(('click'), () => {
        calculator.chooseOrange(button.innerText)
        calculator.updateDisplay()
    } )
} )

equalButton.addEventListener(('click'), (button) => {
    calculator.compute()
    calculator.updateDisplay()
} )

acButton.addEventListener(('click'), button =>{
    calculator.clear()
} )


// let value = 0;
// let resultOne = ""
// let resultTwo = ""

// const calculator = new calculator(currentAnswer)

// numberButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         // calculator.appendNumber(button.innerText)
//         // if (!currentAnswer) {
//         //     currentAnswer.innerText = 0
//         // }
//         // let inputMulti = currentAnswer
//         // inputMulti.innerHTML = e.target.innerHTML
//         // this.inputMulti = this.currentAnswer.toString() + e.target.innerHTML.toString()
//         // inputMulti = String(e.target.innerHTML)
//         // inputMulti.setAttribute(number)
//         if (value == 0) {
//             value = e.target.innerHTML 
//             currentAnswer.innerHTML = value
//         }else {
//             value = value + e.target.innerHTML
//             currentAnswer.innerHTML = value
//         }
// })
// })

// let inputLable = 

// document.getElementById("input-label")
// operatorButtons.forEach((operator, index) => { 
//     operator.addEventListener("click", (e) => {

//         if (e.target.innerHTML == "+") {
//             currentAnswer.innerHTML == e.target.innerHTML
//             resultOne += value
//             // value += "+"
//             // value = "+"
//             // this.currentAnswer = value
//             // value.innerHTML = "+"
//             // num1 = value
//             // currentAnswer += value
//             // resultOne.innerHTML = value
//             // alert(resultOne)
//             // console.log(index, resultOne,);
//             console.log(operator);
//         } else {
//             value = "+"
//         }
//     } )
// } )


// operatorButtons.forEach((operator) => {
//     operator.addEventListener("click", (e) => {

//         if (e.target.innerHTML == "=") {
//             resultOne += resultOne
//             currentAnswer.innerHTML == e.target.innerHTML
//         }
//     } )
// } )