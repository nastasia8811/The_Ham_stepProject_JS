// 1 вариант
function getNewList(parent = document.body,arr = []) {
    const myFunction = (elem) => `${elem}`;
    const newArr = arr.map(myFunction);
    parent.insertAdjacentHTML("afterbegin","`${elem}`");
}
getNewList("ul", ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]);

// 2 вариант
// arr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
// const myFunction = (elem) => `${elem} `;
// document.body.innerText(arr.map(myFunction);)



