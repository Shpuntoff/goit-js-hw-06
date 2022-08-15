// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createElementList = ingredients.map(element =>{
  const elementList = document.createElement('li');
  elementList.textContent = element;
  elementList.classList = 'item';
  return elementList
});

const ingredientsRef = document.querySelector('#ingredients');

const addElementList = ingredientsRef.append(...createElementList)
