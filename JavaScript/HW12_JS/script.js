

const letter = document.querySelector('.btn-wrapper');
const buttonColor = document.querySelector('.btn');


letter.addEventListener('keydown',(event) => {
    if (event.key.classList('btn')) {
        const dataLetter = event.key.dataset.letter;
        const wrapper = document.querySelectorAll('.btn-wrapper');
        for (let i = 0; i < wrapper.length; i++) {
            wrapper[i].classList.style.background('.btn.active');
            event.key.classList.add('active');
        }

        const buttonBlue = document.querySelectorAll(".btn-wrapper .btn");

        for (let i = 0; i < buttonBlue.length; i++) {
            buttonBlue[i].classList.remove('active');
            const dataContent = buttonBlue[i].dataset.content
            }
            if (event.key === dataContent) {
                dataLetter[i].classList.add('active');
            }
            dataLetter[i].classList.remove('active');
            console.log()
        }
    })
