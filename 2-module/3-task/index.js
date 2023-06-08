let calculator = {
  read(a, b) {
    this.argA = a;
    this.argB = b;
  },
  sum() {
    let calcOut;
    calcOut = this.argA + this.argB;
    this.calcOut = calcOut;
    return this.calcOut;
  },
  mul() {
    let calcOut;
    calcOut = this.argA * this.argB;
    this.calcOut = calcOut;
    return this.calcOut;
  },
};

/*
calculator.read(1, 0);
console.log("Sum is", calculator.sum());
console.log("Multiplauer is", calculator.mul());
*/
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
