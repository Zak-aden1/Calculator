const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operation')
const equalsButton = document.querySelector('.equals')
const deleteButton = document.querySelector('.delete')
const acButton = document.querySelector('.all-clear')

const previousOperation = document.querySelector('.previousOperation')
const currentOperation = document.querySelector('.currentOperation')



class Calculator {
    
    constructor(previousOperation, currentOperation) {
        this.previousOperation = previousOperation
        this.currentOperation = currentOperation
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    pickOperation(operation) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
        

    }

    compute() {
        let results;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        
        switch (this.operation) {
            case '+':
                results = prev + current
                break;
            case '-':
                results = prev - current
                break;
            case '*':
                results = prev * current
                break;
            case '÷':
                results = prev / current
                break;
            default:
                break;
        }
        this.currentOperand = results
        this.operation = undefined
        this.previousOperand = ''
        // this.currentOperation = results
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        
        let integerDisplay;
        if(isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperation.innerHTML = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null) {
            this.previousOperation.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperation.innerText = ''
        }
        // this.previousOperation.innerHTML = this.previousOperand
    }
}

const calculator = new Calculator(previousOperation, currentOperation)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        calculator.pickOperation(button.innerText)
        calculator.updateDisplay()
    })
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})


equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

acButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})