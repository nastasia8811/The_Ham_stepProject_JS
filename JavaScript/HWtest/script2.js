'use strict';
const stopBtn = document.createElement('button');
const resumeBtn = document.createElement('button');
stopBtn.classList.add('banner-btn-controls');
stopBtn.innerText = 'Stop';
resumeBtn.classList.add('banner-btn-controls');
resumeBtn.innerText = 'Resume';

const btnWrapper = document.createElement('div');
btnWrapper.classList.add('banner__btn');
btnWrapper.appendChild(stopBtn);
btnWrapper.appendChild(resumeBtn);
const pullWrapper = document.getElementsByTagName('script');
pullWrapper[0].before(btnWrapper);

const imagesWrapper = document.querySelector('.images-wrapper');

const timerBlock = document.createElement('div');
timerBlock.classList.add('banner-btn-controls');
btnWrapper.appendChild(timerBlock);
console.log(timerBlock);

let currentImage = 0;
imagesWrapper.children[currentImage].classList.add('active');
let timerSecond = 10;
function switcher() {
    timerBlock.innerText = `${timerSecond.toFixed(2)}`;
    timerSecond = (timerSecond - 0.01);
    if (timerSecond < 0) {
        imagesWrapper.children[currentImage].classList.remove('active');
        if (currentImage === imagesWrapper.children.length - 1) {
            currentImage = 0;
        } else {
            currentImage++;
        }
        imagesWrapper.children[currentImage].classList.add('active');
        timerSecond = 10;
        console.log(currentImage);
    }
}
let imageSwitch = setInterval(switcher, 3000);
stopBtn.addEventListener("click", (event) => {
    if (event.target) {
        stopBtn.style.display = 'none';
        btnWrapper.prepend(resumeBtn);
        resumeBtn.style.display = 'inline-block';
    }
    clearInterval(imageSwitch);
});
resumeBtn.addEventListener("click", () => {
    imageSwitch = setInterval(switcher, 3000);
    resumeBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
});

switcher();