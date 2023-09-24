//Блок функции добавления товара в корзину
//смотрим в памяти массив с выбранными карточками, если он не пустой,
if (JSON.parse(localStorage.getItem("cardArr"))) {
  //то берем этот массив,
  var cardArr = JSON.parse(localStorage.getItem("cardArr"));
} else {
  //если он пуст, то создаем новый пустой массив
  cardArr = [];
}
//находим контейнер для коробок с карточками
const containerEl = document.querySelector(".product-box__container");
//находим контейнер в шапке сайта с иконкой и текстом добавления в корзину
const itemInCartEl = document.querySelector(".item_in_cart");
//проверяем если массив с выбранными карточками не пуст,
if (cardArr.length) {
  //то делаем индикатор количества выбранного товара в корзине видимым, количество выбранного товара находится в атрибуте data-count. Этот блок нужен, если корзина из начально не пустая
  itemInCartEl.classList.add("cartCount");
  //количество товара равно длине массива с выбранными товарами-заносим в атрибут data-count. Этот блок нужен, если корзина из начально не пустая
  itemInCartEl.dataset.count = cardArr.length;
}
//
//if (containerEl) {
//вешаем на контейнер для коробок с карточками оброботчик событий клик делигируем события
containerEl.addEventListener("click", (event) => {
  //если кликнули по элементу у которого есть родитель с классом .buy
  if (event.target.closest(".buy")) {
    //то записываеи в переменную id этой карточки из атрибута data-id карточки
    let a = event.target.closest(".buy").dataset.id;
    //если этот id уже есть в массиве выбранных карточек
    if (cardArr.includes(a)) {
      //то не записываем этот id
      return;
    } else {
      //если нет, то добавляем в массив id этой карточки
      cardArr.push(event.target.closest(".buy").dataset.id);
      //делаем индикатор количества выбранного товара в корзине видимым, количество выбранного товара находится в атрибуте data-count. Этот блок нужен, если из начально корзина была пустой и индикатор не включился в начале кода этой страницы
      itemInCartEl.classList.add("cartCount");
      //количество товара равно длине массива с выбранными товарами-заносим в атрибут data-count. Этот блок нужен, если из начально корзина была пустой и индикатор не включился в начале кода этой страницы
      itemInCartEl.dataset.count = cardArr.length;
      //записываем массив с выбранными карточками в память
      localStorage.setItem("cardArr", JSON.stringify(cardArr));
    }
  }
});
//}
