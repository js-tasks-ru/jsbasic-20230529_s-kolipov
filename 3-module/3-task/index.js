function camelize(str) {
  const makeArr = str.split("-");
  const getUpperCase = makeArr.map((item, num) =>
    num == 0 ? item : item[0].toUpperCase() + item.slice(1)
  );
  const getCamelCase = getUpperCase.join("");

  return getCamelCase;
}
