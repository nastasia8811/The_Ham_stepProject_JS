//our services
const tabs = document.querySelector('.tabs');
tabs.addEventListener("click",(event) =>{
    if (event.target.classList.contains('tabs-title')){
        const dataTab = event.target.dataset.menu;
        const tabHeader = document.querySelectorAll(".tabs-title");
        for (let i = 0; i < tabHeader.length; i++){
            tabHeader[i].classList.remove('active');
        }
        event.target.classList.add('active');
        const tabContent = document.querySelectorAll(".tabs-content li");
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove('active');
            const tabLi = tabContent[i].dataset.content;
            if (tabLi === dataTab){
                tabContent[i].classList.add('active');
            } else {tabContent[i].classList.remove('active');
            }
        }
    }
})

//amazing work
const tabsSecond = document.querySelector('.tabs_section_two');

tabsSecond.addEventListener("click",(event) =>{
    if (event.target.classList.contains('amazing_work-tabs-title')){
        const dataTabAM = event.target.dataset.menu;
        const tabHeaderAM = document.querySelectorAll(".amazing_work-tabs-title");
        for (let i = 0; i < tabHeaderAM.length; i++){
            tabHeaderAM[i].classList.remove('active');
        }
        event.target.classList.add('active');
        const tabContentAM = document.querySelectorAll(".amazing_work-tabs-img img");
        for (let i = 0; i < tabContentAM.length; i++) {
            tabContentAM[i].classList.remove('active');
            const tabLiAM = tabContentAM[i].dataset.content;
            if (tabLiAM === dataTabAM){
                tabContentAM[i].classList.add('active');
            } else {tabContentAM[i].classList.remove('active');
            }
        }
    }
})
const findPic = document.querySelectorAll('.amazing_work-tabs-img img');
    findPic.classList ='img';
console.log(findPic);

const allPics = document.querySelector(".amazing_work-tabs-title:first-child");
const imgList = document.querySelectorAll(".img");

findPic.append(imgList.cloneNode(true));

// const ChangeImg = (images) => {
//         images.forEach(item => {
//         if(item.dataset.content.includes('graphic_design')) {
//             const divWrapper = document.createElement('div');
//             divWrapper.className = 'open_menu';
//             divWrapper.innerHTML = `
//             <div class="background_open_menu"></div>
//             <span class="span_open_menu">creative design</span>
//             <span>Web Design</span>
//             `
//             divWrapper.append(item.cloneNode(true));
//             console.log(divWrapper);
//             item.replaceWith(divWrapper);
//         }
//     })
// }
//
// ChangeImg(findPic);

