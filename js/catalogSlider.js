"use strict";

class Slider {
  //получили название класса со слайдерами
  constructor(selector) {
    //находим этот класс со слайдерами
    this.sliderEl = document.querySelector(selector);
    //находим в классе со слайдерами сами страницы с карточками
    this.slides = this.sliderEl.querySelectorAll(".catalogSlider");
    //присваиваем индекс первому слайдеру
    this.slideIdx = 0;
    //находим div-коробку для номеров страниц
    this.pageEl = document.querySelector(".pageSliderBox");
    //создаем div с номерами страниц-перебираем от 0 до количества страниц
    for (let i = 0; i < this.slides.length; i++) {
      const divPage = document.createElement("div");
      divPage.textContent = `${i + 1}`;
      this.pageEl.insertAdjacentElement("beforeend", divPage);
    }
    //находим div с номерами страниц
    this.pages = this.pageEl.querySelectorAll("div");
    //присваиваем индекс первой странице
    this.pageIdx = 0;
  }
  init() {
    //иницыализация
    //делаем активной номер первой страницы
    this.pages[this.pageIdx].classList.add("activ");
    //вешаем оброботчик событий клик на стрелку
    document.querySelector(".leftArrow").addEventListener("click", () => {
      //показать предыдущую страницу
      this.prevSlide();
    });
    //вешаем оброботчик событий клик на стрелку
    document.querySelector(".rightArrow").addEventListener("click", () => {
      //показать следующую страницу
      this.nextSlide();
    });
    //вешаем оброботчик событий клик на div-коробку для номеров страниц-делигируем события
    this.pageEl.addEventListener("click", (event) => {
      //делаем не активным текущий номер страницы
      this.pages[this.pageIdx].classList.remove("activ");
      //делаем активным номер по которому произошел клик
      event.target.classList.add("activ");
      //определяем индекс кликнутой страницы
      this.pageIdx = event.target.textContent - 1;
      //вызываем функцию переключения на нужную страницу с карточками-передаем индекс кликнутой страницы
      this.pegeSlide(event.target.textContent - 1);
    });
  }
  pegeSlide(i) {
    //функция переключения на страницу с карточками при нажатии на номер страницы-получает номер страницы
    //делаем текущую страницу с карточками не видимой
    this.slides[this.slideIdx].classList.add("hidden");
    //делаем видимой нужную страницу с карточками
    this.slides[i].classList.remove("hidden");
    //присваиваем индексу слайдера индекс страницы
    this.slideIdx = i;
    //поднимаемся на верх сайта
    scroll(0, 150);
  }
  nextSlide() {
    //функция переключения на следующую страницу
    //делаем текущую страницу с карточками не видимой
    this.slides[this.slideIdx].classList.add("hidden");
    //проверяем, если текущая страница последняя, то никуда не движимся
    if (this.slideIdx === this.slides.length - 1) {
      this.slideIdx = this.slideIdx;
    } else {
      //если текущая страница не последняя, то к текущему индексу слайдера страницы прибавляем 1
      this.slideIdx++;
    }
    //делаем видимой следующую страницу
    this.slides[this.slideIdx].classList.remove("hidden");
    //поднимаемся на верх сайта
    scroll(0, 150);
    //делаем не активным номер текущей страницы
    this.pages[this.pageIdx].classList.remove("activ");
    //присваиваем индексу страницы номер следующего слайдера
    this.pageIdx = this.slideIdx;
    //делаем активным номер следующей страницы
    this.pages[this.pageIdx].classList.add("activ");
  }
  prevSlide() {
    //функция переключения на предыдущую страницу
    //делаем текущую страницу с карточками не видимой
    this.slides[this.slideIdx].classList.add("hidden");
    //проверяем, если текущая страница первая, то никуда не движимся
    //если текущая страница не первая, то к текущему индексу слайдера страницы вычетаем 1
    this.slideIdx = this.slideIdx === 0 ? this.slideIdx : this.slideIdx - 1;
    //делаем видимой предыдущую страницу
    this.slides[this.slideIdx].classList.remove("hidden");
    //поднимаемся на верх сайта
    scroll(0, 150);
    //делаем не активным номер текущей страницы
    this.pages[this.pageIdx].classList.remove("activ");
    //присваиваем индексу страницы номер предыдущего слайдера
    this.pageIdx = this.slideIdx;
    //делаем активным номер предыдущей страницы
    this.pages[this.pageIdx].classList.add("activ");
  }
}

window.addEventListener("load", () => {
  //после загрузки страницы
  //создаем слайдер - передаем название класса-оболочки для всего содержимого слайдера
  const slider = new Slider(".product-box__container");
  //инициализируем слайдер
  slider.init();
});
