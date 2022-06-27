//
//
// const letter = document.querySelector('.btn-wrapper');
// const buttonColor = document.querySelector('.btn');
//
//
// letter.addEventListener('keydown',(event) => {
//     if (event.key.classList.includes('btn')) {
//         const dataLetter = event.key.dataset.letter;
//         const wrapper = document.querySelectorAll('.btn-wrapper');
//         for (let i = 0; i < wrapper.length; i++) {
//             wrapper[i].classList.style.background('.btn.active');
//             event.key.classList.add('active');
//             console.log(event.target)
//         }
//
//         for (let i = 0; i < letter.length; i++) {
//             letter[i].classList.remove('active');
//             const dataContent = buttonColor[i].dataset.content
//             if (event.key === dataContent) {
//                 buttonColor[i].classList.add('active');
//             }
//             buttonColor[i].classList.remove('active');
//
//         }}
//     })

const displayBtns = document.querySelectorAll(".btn");
console.log(displayBtns);

// function scanBtns() {
//     document.addEventListener("keydown", (event) => {
//         displayBtns.forEach(element => {
//             element.style.backgroundColor = "black";
//             if(event.key === element.textContent || event.key === (element.textContent).toLowerCase()) {
//                 element.style.backgroundColor = "red";
//             }
//         })
//     });
// }
// scanBtns();
function scanBtns() {
    document.addEventListener("keydown", (event) => {
        displayBtns.forEach(element => {
            element.style.backgroundColor = "black";
            if(event.key === element.textContent || event.key === (element.textContent).toLowerCase()) {
                element.style.backgroundColor = "red";
            }
        })
    });
}
scanBtns();