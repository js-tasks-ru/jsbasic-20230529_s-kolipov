function initCarousel() {
  let carouselContainer = document.querySelector(".carousel"); // здесь висит событие
  let carouselPicture = document.querySelector(".carousel__inner"); // здесь дивки с картинками
  const leftBtn = document.querySelector(".carousel__arrow_left"); // левая кнопка
  const rightBtn = document.querySelector(".carousel__arrow_right"); // правая кнопка

  const pictureWidth = carouselPicture.offsetWidth; // текущая ширина картинки (на это значение двигать)
  let position = 0;
  leftBtn.style.display = "none"; // по дефолту кнопку назад надо спрятать
  let maxCount = pictureWidth * -3; // максимальная величина смещения вправо

  // слушаем событие "клик" и смотрим по какому элементу кликнули
  carouselContainer.addEventListener("click", (event) => {
    // клик на правю кнопку
    if (event.target.closest(".carousel__arrow_right")) {
      leftBtn.style.display = ""; // покажем левую кнопку
      position -= pictureWidth;
      carouselPicture.style.transform = `translateX(${position}px)`; // двигаем див с картинками

      if (position == maxCount) {
        rightBtn.style.display = "none"; // если дошли до конца слайдов, то кнопку вправо спрятать
      }
    } else if (event.target.closest(".carousel__arrow_left")) {
      // кликнули по левой кнопке
      rightBtn.style.display = "";
      position += pictureWidth;
      carouselPicture.style.transform = `translateX(${position}px)`; // двигаем картинку

      // проверим значение position и если оно будет ноль, то снова спрячем кнопку влево
      if (position === 0) {
        leftBtn.style.display = "none";
      }
    }
  });
}
