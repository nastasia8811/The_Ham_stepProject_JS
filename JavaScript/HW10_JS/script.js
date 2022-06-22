const getSelector = document.querySelector('.centered-content');
console.log(getSelector);


const ulClassTabs = document.querySelector('.tabs');
const ulClassTabsContent = document.querySelector('.tabs-content');
console.log(ulClassTabs);
console.log(ulClassTabsContent);

let tabsList = ulClassTabs.children;
console.log(Array.from(tabsList));

let tabsContentList = ulClassTabsContent.children;
console.log(Array.from(tabsContentList));


//выдать для tabs li дата атрибут data-menu придумать для него значение на основе индекса колекции

// let getLiElements = document.querySelector('.mainClass > li:first-child');
// getLiElements.classList.toggle('akali');
//
// console.log(getLiElements);

//
// const getList = document.getElementsByTagName("ul");
// console.log(getList);

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



