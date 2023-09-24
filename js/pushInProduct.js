//создаем переменную для хранения id выбранного товара
let pushInProduct = null;
//находим контейнер для коробок с карточками
//const containerEl был найден в addToCart.js
//вешаем на контейнер для коробок с карточками оброботчик событий клик делигируем события
containerEl.addEventListener("click", (event) => {
  // event.preventDefault();
  //если кликнули по элементу у которого есть родитель с классом .product-box_item_content
  if (event.target.closest(".product-box_item_content")) {
    //то записываеи в переменную id этой карточки из атрибута data-id карточки
    pushInProduct = event.target.closest(".product-box_item_content").dataset
      .id;
    //записываем в память эту переменную
    localStorage.setItem("pushInProduct", JSON.stringify(pushInProduct));
  }
});
//}
