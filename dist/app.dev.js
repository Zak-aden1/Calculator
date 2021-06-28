"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var numberButtons = document.querySelectorAll([".number"]);
var operatorButtons = document.querySelectorAll(".orange"); // console.log(button);

var currentAnswer = document.querySelector(".answer");
var prevAnswer = document.querySelector('.prev');
var equalButton = document.querySelector('.equal');
var delButton = document.querySelector('.del');
var acButton = document.querySelector('.all-clear');

var Calculator =
/*#__PURE__*/
function () {
  function Calculator(currentAnswer, prevAnswer) {
    _classCallCheck(this, Calculator);

    this.currentAnswer = currentAnswer;
    this.prevAnswer = prevAnswer;
    this.clear();
  }

  _createClass(Calculator, [{
    key: "clear",
    value: function clear() {
      this.currentOper = "";
      this.prevOper = "";
      this.operation = undefined;
    }
  }, {
    key: "delete",
    value: function _delete() {}
  }, {
    key: "append",
    value: function append(number) {
      if (number === '.' && this.currentOper.includes('.')) return;
      this.currentOper = this.currentOper.toString() + number.toString();
    }
  }, {
    key: "chooseOrange",
    value: function chooseOrange(operation) {
      if (this.currentOper === '') return;

      if (this.prevAnswer !== '') {
        this.compute();
      }

      this.operation = operation;
      this.prevOper = this.currentOper;
      this.currentOper = '';
    }
  }, {
    key: "compute",
    value: function compute() {
      var theResults;
      var previously = parseFloat(this.prevOper);
      var currently = parseFloat(this.currentOper);
      if (previously == '' || currently == '') return;

      switch (this.operation) {
        case '+':
          theResults = previously + currently;
          break;

        case '-':
          theResults = previously + currently;
          break;

        case '*':
          theResults = previously * currently;
          break;

        case '÷':
          theResults = previously / currently;
          break;

        default:
          return;
      }

      this.currentOper = theResults;
      this.operation = undefined;
      this.prevOper = '';
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      this.currentAnswer.innerText = this.currentOper;
      this.prevAnswer.innerText = this.prevOper;
    }
  }]);

  return Calculator;
}();

var calculator = new Calculator(currentAnswer, prevAnswer);
numberButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    calculator.append(button.innerText);
    calculator.updateDisplay();
  });
});
operatorButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    calculator.chooseOrange(button.innerText);
    calculator.updateDisplay();
  });
});
equalButton.addEventListener('click', function (button) {
  calculator.compute();
  calculator.updateDisplay();
});
acButton.addEventListener('click', function (button) {
  calculator.clear();
}); // let value = 0;
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