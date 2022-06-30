const letter = document.querySelectorAll(".btn");
console.log(letter);

function changeLetter() {
    document.addEventListener("keydown", (event) => {
        letter.forEach(element => {
            element.style.backgroundColor = "black";
            if(event.key === element.textContent || event.key === (element.textContent).toLowerCase()) {
                element.style.backgroundColor = "red";
            }
        })
    });
}
changeLetter();