"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var numberButtons = document.querySelectorAll('.number');
var operationButtons = document.querySelectorAll('.operation');
var equalsButton = document.querySelector('.equals');
var deleteButton = document.querySelector('.delete');
var acButton = document.querySelector('.all-clear');
var previousOperation = document.querySelector('.previousOperation');
var currentOperation = document.querySelector('.currentOperation');

var Calculator =
/*#__PURE__*/
function () {
  function Calculator(previousOperation, currentOperation) {
    _classCallCheck(this, Calculator);

    this.previousOperation = previousOperation;
    this.currentOperation = currentOperation;
    this.clear();
  }

  _createClass(Calculator, [{
    key: "clear",
    value: function clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  }, {
    key: "appendNumber",
    value: function appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  }, {
    key: "pickOperation",
    value: function pickOperation(operation) {
      if (this.currentOperand === '') return;

      if (this.previousOperand !== '') {
        this.compute();
      }

      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }
  }, {
    key: "compute",
    value: function compute() {
      var results;
      var prev = parseFloat(this.previousOperand);
      var current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;

      switch (this.operation) {
        case '+':
          results = prev + current;
          break;

        case '-':
          results = prev - current;
          break;

        case '*':
          results = prev * current;
          break;

        case '÷':
          results = prev / current;
          break;

        default:
          break;
      }

      this.currentOperand = results;
      this.operation = undefined;
      this.previousOperand = ''; // this.currentOperation = results
    }
  }, {
    key: "getDisplayNumber",
    value: function getDisplayNumber(number) {
      var stringNumber = number.toString();
      var integerDigits = parseFloat(stringNumber.split('.')[0]);
      var decimalDigits = stringNumber.split('.')[1];
      var integerDisplay;

      if (isNaN(integerDigits)) {
        integerDisplay = '';
      } else {
        integerDisplay = integerDigits.toLocaleString('en', {
          maximumFractionDigits: 0
        });
      }

      if (decimalDigits != null) {
        return "".concat(integerDisplay, ".").concat(decimalDigits);
      } else {
        return integerDisplay;
      }
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      this.currentOperation.innerHTML = this.getDisplayNumber(this.currentOperand);

      if (this.operation != null) {
        this.previousOperation.innerText = "".concat(this.getDisplayNumber(this.previousOperand), " ").concat(this.operation);
      } else {
        this.previousOperation.innerText = '';
      } // this.previousOperation.innerHTML = this.previousOperand

    }
  }]);

  return Calculator;
}();

var calculator = new Calculator(previousOperation, currentOperation);
numberButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
operationButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    console.log(button.innerText);
    calculator.pickOperation(button.innerText);
    calculator.updateDisplay();
  });
});
deleteButton.addEventListener('click', function () {
  calculator["delete"]();
  calculator.updateDisplay();
});
equalsButton.addEventListener('click', function () {
  calculator.compute();
  calculator.updateDisplay();
});
acButton.addEventListener('click', function () {
  calculator.clear();
  calculator.updateDisplay();
});