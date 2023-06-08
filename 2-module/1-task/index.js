function sumSalary(salaries) {
  let salaryTotal = 0; // переменная для вывода суммы

  for (let key in salaries) {
    if (!isFinite(salaries[key])) {
      // проверяем что в объекте нет спец числовых типов
      return salaryTotal; // если да то выводим дефолтный ноль
    } else if (typeof salaries[key] == "number") {
      salaryTotal += salaries[key]; // если в объекте нет сец числовых, и если ест числа то складываем
    }
  }
  return salaryTotal; // если пустой объект или без чисел то выведем дефолтный ноль
}
