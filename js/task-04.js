// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrementBtnRef = document.querySelector('[data-action = "decrement"]');
const incrementBtnRef = document.querySelector('[data-action = "increment"]');
const spanRef = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
  spanRef.textContent = counterValue -= 1;
};
const increment = () => {
  spanRef.textContent = counterValue += 1;
};

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);
