/*
1) Це об'єктна модель документу, яка являє собою весь склад сторінки в вигляді об'єктів , які можна змінювати.
2)innerText - показує весь текстовий вміст, який не відноситься до синтаксису HTML.
Тобто будь-який текст, укладений між тегами елемента, що відкривають і закривають, буде записаний в innerText.
Причому якщо всередині innerText будуть ще якісь елементи HTML зі своїм вмістом, він проігнорує самі елементи і поверне їх внутрішній текст.
innerHTML - покаже текстову інформацію по одному елементу. У висновок потрапить і текст і розмітка HTML-документа,
яка може бути укладена між тегами основного елемента, що відкривають і закривають.
3)document
*/

const pHtmlCollection = document.getElementsByTagName("p");
console.log(pHtmlCollection);
const tagStyle = document.body.style.background = "#ff0000";
const findElementById = document.getElementById("optionsList");
console.log(findElementById);
console.log(findElementById.parentElement);

if (findElementById.hasChildNodes()) {
    let children = findElementById.childNodes;
    console.log(findElementById.childNodes);
}
const findElementByClass = document.getElementsByClassName(".testParagraph");
findElementByClass.textContent ="<p>This is a paragraph</p>";
console.log(findElementByClass);

const findElem = document.querySelector(".main-header");
console.log(findElem.childNodes);

const cards = document.querySelectorAll('.main-header');
for (let i = 0; i < cards.length; ++i ){
    cards[i].classList.add('.nav-item');
}
console.log(cards)

