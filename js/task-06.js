// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали
//  у вихідні файли завдання.

const validation = document.querySelector('#validation-input');

const inputFocus = () => { 
    if (validation.value.length === parseInt(validation.dataset.length)) {
        validation.classList.add("valid");
        validation.classList.remove("invalid");
    } else {
        validation.classList.add("invalid");
        validation.classList.remove("valid");
    };
    // console.log(validation.value.length);
};

validation.addEventListener('blur', inputFocus);