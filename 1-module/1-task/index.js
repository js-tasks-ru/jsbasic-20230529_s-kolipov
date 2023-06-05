function factorial(n) {
  let isFactorial;
  for (isFactorial = 1; n; isFactorial = isFactorial * n--) {}
  return isFactorial;
}
