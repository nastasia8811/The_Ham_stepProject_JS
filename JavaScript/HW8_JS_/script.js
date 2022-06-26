/*
1) Це об'єктна модель документу, яка являє собою весь склад сторінки в вигляді об'єктів , які можна змінювати.
2)innerText - показує весь текстовий вміст, який не відноситься до синтаксису HTML.
Тобто будь-який текст, укладений між тегами елемента, що відкривають і закривають, буде записаний в innerText.
Причому якщо всередині innerText будуть ще якісь елементи HTML зі своїм вмістом, він проігнорує самі елементи і поверне їх внутрішній текст.
innerHTML - покаже текстову інформацію по одному елементу. У висновок потрапить і текст і розмітка HTML-документа,
яка може бути укладена між тегами основного елемента, що відкривають і закривають.
3)document
*/
//
const pHtmlCollection = document.getElementsByTagName("p");
console.log(pHtmlCollection);

const qw = document.querySelectorAll("p");
qw.forEach(elem => elem.style.background = "red");


const findElementById = document.getElementById("optionsList");
console.log(findElementById);
console.log(findElementById.parentElement);

let children = findElementById.children;
console.log(findElementById.children);


findElementById.textContent ="<p>This is a paragraph</p>";
console.log(findElementById);

const findElem = document.querySelector(".main-header");
console.log(findElem.children);

const findElements = document.querySelector(".main-header");
const ch = findElements.children
ch.className = 'nav-item';
console.log(ch);

const deleteElements = document.querySelector(".section-title");
document.body.classList.remove(deleteElements);
console.log(deleteElements);