//получаем массив с id выбранных карточек
var cardArr = JSON.parse(localStorage.getItem("cardArr"));

//находим контейнер в шапке сайта с иконкой и текстом добавления в корзину
const itemInCartEl = document.querySelector(".item_in_cart");
//проверяем если массив с выбранными карточками не пуст,
if (cardArr.length) {
  //то делаем индикатор количества выбранного товара в корзине видимым, количество выбранного товара находится в атрибуте data-count. Этот блок нужен, если корзина из начально не пустая
  itemInCartEl.classList.add("cartCount");
  //количество товара равно длине массива с выбранными товарами-заносим в атрибут data-count. Этот блок нужен, если корзина из начально не пустая
  itemInCartEl.dataset.count = cardArr.length;
}

//находим кнопку-крестик удаления карточки
const btnsDeleteCard = document.querySelectorAll(".cart_box_left_card_closed");
//вешаем обработчик события на клик
btnsDeleteCard.forEach((el) => {
  el.addEventListener("click", () => {
    //находим у нажатой кнопки-крестика родителя с классом .cart_box_left_card - это коробка карточки
    const product = el.closest(".cart_box_left_card");
    //находим id из атрибута data-id удаляемой карточки
    const idCardDelete = product.dataset.id;
    //находим в массиве выбранных карточек индекс удаляемой карточки
    const indexIdCardDelete = cardArr.indexOf(idCardDelete);
    //удаляем из массива выбранных карточек удаляемую карточку
    cardArr.splice(indexIdCardDelete, 1);
    //перезаписываем в память массив без удаленной карточки
    localStorage.setItem("cardArr", JSON.stringify(cardArr));
    //удаляем выбранную карточку
    product.remove();
    //обновляем индикатор количества товара в корзине в шапке сайта
    itemInCartEl.dataset.count = cardArr.length;
    //проверяем если массив с выбранными карточками опустел,
    if (!cardArr.length) {
      //то делаем индикатор количества выбранного товара в корзине невидимым
      itemInCartEl.classList.remove("cartCount");
    }
  });
});
//находим кнопку удаления всех выбранных карточек
const btnClearCart = document.querySelector(".clearCart");
//вешаем событие клика
btnClearCart.addEventListener("click", () => {
  //удаляем из памяти массив с выбранными карточками
  localStorage.removeItem("cardArr");
  //находим все карточки на странице и удаляем их
  document.querySelectorAll(".cart_box_left_card").forEach((el) => el.remove());
  //делаем индикатор количества выбранного товара в корзине невидимым
  itemInCartEl.classList.remove("cartCount");
});

//Для перехода на страницу товара
//находим контейнер с карточками
const productTitle = document.querySelector(".cart_box_left");
console.log(productTitle);
//вешаем на элемент с названием товара оброботчик событий клик делигируем события
productTitle.addEventListener("click", (event) => {
  if (event.target.closest(".cart_box_left_card")) {
    //создаем переменную для хранения id выбранного товара и записываем в переменную id этой карточки из атрибута data-id карточки
    let pushInProduct = event.target.closest(".cart_box_left_card").dataset.id;
    //записываем в память эту переменную
    localStorage.setItem("pushInProduct", JSON.stringify(pushInProduct));
  }
});
