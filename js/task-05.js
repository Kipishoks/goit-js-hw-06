// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне значення в span#name
//     - output.
//    Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const ref = {
    inputName: document.querySelector("#name-input"),
    outputText: document.querySelector("#name-output")
}
console.log(ref.inputName);
console.dir(ref.outputText);

const onButtonClick = () => {
    const inputName = ref.inputName.value;
    if (inputName != '') {
        ref.outputText.textContent = inputName;
        console.log(inputName);
    } else
        (ref.outputText.textContent = 'Anonymous');
    
}

ref.inputName.addEventListener('input', onButtonClick);


