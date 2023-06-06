// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
//     тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories,
//     знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
//      і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach()
// і властивості навігації по DOM.

const ref = {
    list: document.querySelectorAll('ul#categories ul').length,
    listUl: document.querySelector('ul#categories').children,
};
   
console.log('Number of categories:', ref.list);

Object.values(ref.listUl).forEach(function (element) {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.childElementCount);
    
});

