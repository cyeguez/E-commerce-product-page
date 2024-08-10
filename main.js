// Umentar o disminuir la cantidad de productos por el usuario

const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const inputNumber = document.querySelector(".input__number");

let valueInput = 0;

minusBtn.addEventListener("click", () => {
  valueInput--;
  if (valueInput > 0) {
    inputNumber.value = valueInput;
  } else {
    valueInput = 0;
    inputNumber.value = valueInput;
  }
});
plusBtn.addEventListener("click", () => {
  valueInput++;
  inputNumber.value = valueInput;
});

// Agregar el total de productos al presionar el botton add

const addBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(
  ".header__user__cart--notification"
);

addBtn.addEventListener("click", () => {
  cartNotification.innerText= valueInput;
  cartNotification.style.display = "block";
});
