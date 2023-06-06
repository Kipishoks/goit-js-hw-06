// Напиши скрипт, який реагує на зміну значення input#font-size-control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputFont = {
    inputSize: document.querySelector('#font-size-control'),
    spanText: document.querySelector('#text')
};

const sizeControl = () => {
    inputFont.spanText.style.fontSize = inputFont.inputSize.value + "px";
};
    
    inputFont.inputSize.addEventListener('input', sizeControl);