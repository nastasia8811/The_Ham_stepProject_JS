
function getNewList(arr = []) {
    const ulList = document.createElement("ul");
    const newArr = arr.map((elem) => {
        const li = `<li>${elem}</li>`
        return li
    });
    ulList.innerHTML = newArr;
    return ulList
}
document.body.after(getNewList( ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]));

