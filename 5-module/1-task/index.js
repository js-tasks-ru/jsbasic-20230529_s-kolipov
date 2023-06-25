function hideSelf() {
  let btn1 = document.querySelector(".hide-self-button");

  btn1.addEventListener("click", btn1Handler);
  function btn1Handler() {
    btn1.hidden = true;
  }
}
