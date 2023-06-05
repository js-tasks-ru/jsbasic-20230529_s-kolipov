function truncate(str, maxlength) {
  let cutResult;
  if (str.length > maxlength) {
    cutResult = str.slice(0, [maxlength - 1]) + "…";
    return cutResult;
  } else {
    return str;
  }
}
