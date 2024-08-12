// Umentar o disminuir la cantidad de productos por el usuario

const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const inputNumber = document.querySelector(".input__number");
const cartBtn = document.querySelector(".header__user__cart__icon");
const cartModal = document.querySelector(".cart-modal");
let cartModalPrice = document.querySelector(".cart-modal__price");
const cartEmpty = document.querySelector(".cart-modal__empty");
const contentCart = document.querySelector(".cart-modal__detail-container");
const chekOutBtn = document.querySelector(".cart-modal__checkout");
const addBtnCart = document.querySelector(".details__button");
let cartNotification = document.querySelector(
  ".header__user__cart--notification"
);
const navMobile = document.querySelector(".modal-navbar-container");
const btnMenuHamburger = document.querySelector(".header__navigation__menu");
const btnClose = document.querySelector(".modal-navbar__close");
const btnPrevious = document.querySelector(".gallery__container-previus");
const btnNext = document.querySelector(".gallery__container-next");
const galleryContainer = document.querySelector(".gallery__image-container");

let itemCount = 0;

plusBtn.addEventListener("click", () => {
  inputNumber.value++;
  inputNumber.style.display = "block";
});

minusBtn.addEventListener("click", () => {
  inputNumber.value--;
  if (inputNumber.value <= 0) {
    inputNumber.value = 0;
    inputNumber.style.display = "block";
  }
});

// Función encargada de calculcular el precio y mostrarlo

const calculatePrice = (item) => {
  cartModalPrice.innerHTML = `$125 x${item} <span>$${item * 125}.00</span>`;
};

// Funcion que se encarga de limpiar el carrito
const clearCartContent = () => {
  contentCart.style.display = "none";
  chekOutBtn.style.display = "none";
  cartNotification.innerText = 0;
  cartNotification.style.display = "none";
  cartEmpty.style.display = "block";
};

// Función que me muestra el los elementos del carrito
const showmeCart = () => {
  contentCart.style.display = "flex";
  chekOutBtn.style.display = "block";
  cartNotification.innerText = itemCount;
  cartNotification.style.display = "block";
  cartEmpty.style.display = "none";
};
// Añadir productos al carrito

addBtnCart.addEventListener("click", () => {
  itemCount += parseInt(inputNumber.value);
  if (itemCount >= 1) {
    cartNotification.innerText = itemCount;
    cartNotification.style.display = "block";
    inputNumber.value = 0;
    showmeCart();
    calculatePrice(itemCount);
  }
});

// Activando el carrito

cartBtn.addEventListener("click", () => {
  cartModal.classList.toggle("show-block");
  if (itemCount == 0) {
    clearCartContent();
  } else if (itemCount >= 1) {
    contentCart.style.display = "flex";
    cartEmpty.style.display = "none";
    chekOutBtn.style.display = "inline";
    calculatePrice(itemCount);
  }
});

// Limpiar el carrito

const clearCart = document.querySelector(".cart-modal__delete");

clearCart.addEventListener("click", () => {
  itemCount = 0;
  clearCartContent();
});

// activar el Menu mobile

btnMenuHamburger.addEventListener("click", () => {
  navMobile.classList.add("show-block");
});
btnClose.addEventListener("click", () => {
  navMobile.classList.remove("show-block");
});

// Funcioón encargada de cambiar las imagenes al presionar el botón hacia adelante
let imgIndex = 1;
function changeNextImage(imageContainer) {
  if (imgIndex == 4) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }
  imageContainer.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg"`;
}

function changePreviousImage(imageContainer) {
  if (imgIndex == 1) {
    imgIndex =4;
  } else {
    imgIndex--;
  }
  imageContainer.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg"`;
}

btnNext.addEventListener("click", () => {
  changeNextImage(galleryContainer);
});

btnPrevious.addEventListener("click", () => {
  changePreviousImage(galleryContainer);
});
