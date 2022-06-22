// передаем колбэк и задержку
//можно отменить, а можно не отменять
// setTimeout(() => {
//     console.log('Hello!');
// }, 2000);
// setTimeout(() => clearTimeout(timeoutId),3000);
// передаем колбэк и задержку
// нужно отменять обязательно

// let second = 0;
// const intervalId = setInterval(() => {
//     second++;
// console.log(second);
// },1000);
// setTimeout(() => clearInterval(intervalId), 5000);

// рекурсивный setTimeout

// let x = 0;
// let timerId;
//
// const recTimeout = (timerId) => {
//     timerId = setTimeout(() => {
//         console.log(x);
//         x++;
//         if (x < 5) {
//             recTimeout(timerId)
//         }
//     }, 1000)
// };
// recTimeout(timerId);


// setTimeout(() => {
//     console.log('from set timeout');
// },0);
// console.log('from main js');

// собака прыгает

// const dog = document.querySelector('.dog');
// const buttonJump = document.querySelector('button');
// const spanWow = document.querySelector('span');
// buttonJump.addEventListener('click',(event) =>{
//     dog.classList.add('jump');
//     spanWow.style.display = 'inline';
//     event.target.disabled = true;
//     setTimeout(() => spanWow.style.display = 'none' ,500);
//     setTimeout(() => {
//         dog.classList.remove('jump');
//     event.target.disabled = false;
// },2100);
// });

//вкладка aplication
// sessionStorage - хранит данные пока пользователь на странице
//localStorage - хранит всегда

// sessionStorage.setItem('user','Max');
// localStorage.setItem('user','Max');
// сохранить обьекты можно в JSON строку. преобразовывает в строку
//
const jsonObject = JSON.stringify(someObject);
console.log(jsonObject);
const obj = JSON.parse(localStorage.getItem('jsonObject'));
document.write(`Hello,${obj.name}`)



