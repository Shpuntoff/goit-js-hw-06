// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

const input = document.querySelector('#validation-input');

const checkInputValue = () => {
    if (input.value.length === Number(input.getAttribute('data-length'))) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  };

input.addEventListener('blur', checkInputValue);