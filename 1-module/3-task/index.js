function ucFirst(str) {
  let upperStr;
  if (str) {
    upperStr = str[0].toUpperCase() + str.slice(1);
    return upperStr;
  } else {
    return str;
  }
}
