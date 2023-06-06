const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const container = document.querySelector('#ingredients');

const newList = ingredients.map(function (ingredient) {
  const newElem = document.createElement('li');
  newElem.textContent = ingredient;
  newElem.classList.add('item');
  console.log(newElem);
  return (newElem);
}
);

container.append(...newList);

// const newList2 = ingredients.map(({ingredient}) => 
//   `<li > ${ingredient} </li>`
// ).join('');

// console.log(newList2);