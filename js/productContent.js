//получаем базу данных с товарами
import { dataInfo } from "./dataInfo.js";
//распарсиваем базу данных
const data = JSON.parse(dataInfo);
//получаем переменную с id кликнутой карточки
var pushInProduct = JSON.parse(localStorage.getItem("pushInProduct"));
//находим правую кнопку переключения сладера-перед ней мы добавим сами сладеры
const rightArrow = document.querySelector(".rightArrow");
//находим заголовок для дальнейшего добавления контента
const contentTitle = document.querySelector(".content_title");
//находим заголовок для дальнейшего добавления контента
const contentHeading = document.querySelector(".content_heading");
//находим заголовок для дальнейшего добавления контента
const contentText = document.querySelector(".content_text");
//находим заголовок для дальнейшего добавления контента
const contentPrice = document.querySelector(".content_price");
//находим контейнер с корзиной для добавления id карточки
const addToCart = document.querySelector(".content_add_to_cart");
//пробегаемся по базе данных и находим нужную карточку и добавляем слайдеры
data.forEach(({ id, img1, img2, img3, gender, name, textProduct, price }) => {
  if (pushInProduct === id) {
    const sliderImages = `
    <img class="slider_img" src="${img1}" alt="${img1}">
    <img class="slider_img hidden" src="${img2}" alt="${img2}">
    <img class="slider_img hidden" src="${img3}" alt="${img3}">`;
    //добавляем каждую созданную карточку в контейнер
    rightArrow.insertAdjacentHTML("beforebegin", sliderImages);
    //Добавляем контент
    contentTitle.textContent = `${gender} COLLECTION`;
    //Добавляем контент
    contentHeading.textContent = `${name}`;
    //Добавляем контент
    contentText.textContent = `${textProduct}`;
    //Добавляем контент
    contentPrice.textContent = `$ ${price}`;
    addToCart.setAttribute("data-id", `${id}`);
  }
});
//Блок функции добавления товара в корзину
//находим контейнер с иконкой корзины и текстом
const addToCartCatalog = document.querySelector(".content_add_to_cart");
//вешаем на контейнер с иконкой и текстом оброботчик событий клик делигируем события
addToCartCatalog.addEventListener("click", (event) => {
  //смотрим в памяти массив с выбранными карточками, если он не пустой,
  if (JSON.parse(localStorage.getItem("cardArr"))) {
    //то берем этот массив,
    var cardArr = JSON.parse(localStorage.getItem("cardArr"));
  } else {
    //если он пуст, то создаем новый пустой массив
    cardArr = [];
  }
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
