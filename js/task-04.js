// Створи змінну counterValue, в якій буде зберігатися поточне
// значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або
// зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const ref = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    counterValue: document.querySelector("#value"),
};

console.log(ref.counterValue.textContent);


const onButtonClickDecr = () => {
    ref.counterValue.textContent= parseInt(ref.counterValue.textContent) - 1;
    console.log(ref.counterValue.textContent);
};

ref.decrement.addEventListener('click', onButtonClickDecr);

const onButtonClickIncr = () => {
    ref.counterValue.textContent= parseInt(ref.counterValue.textContent|| 0) + 1;
    console.log(ref.counterValue.textContent);
}


ref.increment.addEventListener('click', onButtonClickIncr);

