"use strict";

class Slider {
  //получили название класса со слайдерами
  constructor(selector) {
    //находим этот класс со слайдерами
    this.sliderEl = document.querySelector(selector);
    //находим в классе со слайдерами сами слайдеры
    this.slides = this.sliderEl.querySelectorAll(".slider_img");
    //присваиваем индекс первому слайдеру
    this.slideIdx = 0;
  }
  init() {
    //иницыализация
    //делаем активной номер первой страницы
    this.slides[this.slideIdx].classList.remove("hidden");
    //вешаем оброботчик событий клик на стрелку
    document.querySelector(".leftArrow").addEventListener("click", () => {
      this.prevSlide();
    });
    //вешаем оброботчик событий клик на стрелку
    document.querySelector(".rightArrow").addEventListener("click", () => {
      this.nextSlide();
    });
  }
  nextSlide() {
    //функция переключения на следующий слайдер
    //делаем текущий слайдер не видимым
    this.slides[this.slideIdx].classList.add("hidden");
    //определяем номер следующего слайдера
    this.slideIdx = (this.slideIdx + 1) % this.slides.length;
    //делаем видимым следующий сладер
    this.slides[this.slideIdx].classList.remove("hidden");
  }
  prevSlide() {
    //функция переключения на предыдущий слайдер
    //делаем текущий слайдер не видимым
    this.slides[this.slideIdx].classList.add("hidden");
    //определяем номер предыдущего слайдера
    this.slideIdx =
      this.slideIdx === 0 ? this.slides.length - 1 : this.slideIdx - 1;
    //делаем видимым предыдущий сладер
    this.slides[this.slideIdx].classList.remove("hidden");
  }
}
window.addEventListener("load", () => {
  //после загрузки страницы
  //создаем слайдер - передаем название класса-оболочки для всего содержимого слайдера
  const slider = new Slider(".slider");
  //инициализируем слайдер
  slider.init();
  //для переключения слайдера по времени
  setInterval(() => {
    slider.nextSlide();
  }, 2000);
});
