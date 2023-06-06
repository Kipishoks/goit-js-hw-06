function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
//  по кліку на button.change - color і виводить значення кольору в span.color.

const ref = {
  buttonRef: document.querySelector('.change-color'),
  bodyRef: document.querySelector('body'),
  spanRef: document.querySelector('.color')
};
console.dir(ref.bodyRef);

const changeColor = () => {
  const randomColor = getRandomHexColor();
  ref.bodyRef.style.background = randomColor;
  ref.spanRef.textContent = randomColor;
};

ref.buttonRef.addEventListener('click', changeColor);