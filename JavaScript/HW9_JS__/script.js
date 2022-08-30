
function getNewList(arr =[] ,parent = document.body) {

    arr.map(elem => {
        let li = document.createElement('li');
        li.innerText = elem;
        parent.append(li);
    })
}
getNewList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], document.querySelector('ul'));
