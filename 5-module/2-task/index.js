function toggleText() {
  let btn = document.querySelector(".toggle-text-button");

  btn.addEventListener("click", btnHandler);

  function btnHandler() {
    if (!document.getElementById("text").hidden) {
      document.getElementById("text").hidden = true;
    } else {
      document.getElementById("text").hidden = false;
    }
    console.log("нажал");
  }
}
