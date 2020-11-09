ymaps.ready(function () {
  var myMap = new ymaps.Map("ya-map", {
      center: [59.939346, 30.329383],
      zoom: 16,
      controls: []
    },{
      suppressMapOpenBlock: true
    },{
      searchControlProvider: "yandex#search"
    }),
    myPlacemark = new ymaps.Placemark(([59.938669, 30.323057]), {

    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#image",
      // Своё изображение иконки метки.
      iconImageHref: "img/pin.svg",
      // Размеры метки.
      iconImageSize: [80, 140],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-39, -142]
    });
  myMap.geoObjects.add(myPlacemark);
});

const feedbackLink = document.querySelector(".feedback-button");
const feedbackJs = document.querySelector(".js-modal");
const feedbackModal = document.querySelector(".modal-feedback");
const feedbackClose = document.querySelector(".modal-close");
const feedbackName = document.querySelector(".feedback-name");
const feedbackEmail = document.querySelector(".feedback-email");
const feedbackText = document.querySelector(".feedback-text");
const feedbackForm = document.querySelector(".feedback-form");
const feedbackBg = document.querySelector(".feedback-background");
const slideBtn1 = document.querySelector(".slide-1");
const slideBtn2 = document.querySelector(".slide-2");
const slideBtn3 = document.querySelector(".slide-3");
const wrapper = document.querySelector(".site-wrapper");
const slide1 = document.querySelector(".cream-raspberry");
const slide2 = document.querySelector(".choco-limon");
const slide3 = document.querySelector(".fondant-strawberry");

let isStorageSupport = 1;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = 0;
}

feedbackLink.addEventListener("click", function (event) {
  event.preventDefault();
  feedbackJs.classList.add("modal-show");
  feedbackBg.classList.add("bg-show");
  if (storageName) {
    feedbackName.value = storageName;
    feedbackEmail.focus();
  }
  if (storageEmail) {
    feedbackEmail.value = storageEmail;
    feedbackText.focus();
  }
  if(!feedbackName.value) {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (event) {
  event.preventDefault();
  feedbackJs.classList.remove("modal-show");
  feedbackModal.classList.remove("modal-error");
  feedbackBg.classList.remove("bg-show");
});

feedbackForm.addEventListener("submit", function (event) {
  if(!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    event.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("modal-error");
  }
  else {
    if (isStorageSupport === 1) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (feedbackModal.classList.contains("modal-show")) {
      event.preventDefault();
      feedbackModal.classList.remove("modal-show");
      feedbackModal.classList.remove("modal-error");
      feedbackBg.classList.remove("bg-show");
    }
  }
});

slideBtn1.addEventListener("click", function() {
  slideBtn1.classList.add("active-slide");
  slideBtn2.classList.remove("active-slide");
  slideBtn3.classList.remove("active-slide");
  wrapper.classList.add("site-wrapper-1");
  wrapper.classList.remove("site-wrapper-2");
  wrapper.classList.remove("site-wrapper-3");
  slide1.classList.add("active");
  slide2.classList.remove("active");
  slide3.classList.remove("active");
});

slideBtn2.addEventListener("click", function() {
  slideBtn1.classList.remove("active-slide");
  slideBtn2.classList.add("active-slide");
  slideBtn3.classList.remove("active-slide");
  wrapper.classList.remove("site-wrapper-1");
  wrapper.classList.add("site-wrapper-2");
  wrapper.classList.remove("site-wrapper-3");
  slide1.classList.remove("active");
  slide2.classList.add("active");
  slide3.classList.remove("active");
});

slideBtn3.addEventListener("click", function() {
  slideBtn1.classList.remove("active-slide");
  slideBtn2.classList.remove("active-slide");
  slideBtn3.classList.add("active-slide");
  wrapper.classList.remove("site-wrapper-1");
  wrapper.classList.remove("site-wrapper-2");
  wrapper.classList.add("site-wrapper-3");
  slide1.classList.remove("active");
  slide2.classList.remove("active");
  slide3.classList.add("active");
});