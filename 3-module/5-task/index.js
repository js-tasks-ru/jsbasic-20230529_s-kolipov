function getMinMax(str) {
  const getArr = str.split(" ").map((item) => (item = parseFloat(item)));
  const filtratedArr = getArr
    .filter((item) => Number.isFinite(item))
    .sort((a, b) => a - b);
  const result = {};
  result.min = Math.min(...filtratedArr);
  result.max = Math.max(...filtratedArr);
  return result;
}
/*
const minMax = getMinMax("1 и -5.8 или 10 хотя 34 + -5.3 и 73");
console.log(minMax);
console.log(typeof minMax);
*/
