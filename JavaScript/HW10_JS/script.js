// const getSelector = document.querySelector('.centered-content');
// console.log(getSelector);
//
// const ulClassTabs = document.querySelectorAll('.tabs>li');
// const ulClassTabsContent = document.querySelectorAll('.tabs-content>li');
// console.log(Array.from(ulClassTabs));
// console.log(Array.from(ulClassTabsContent));
//
// for (let i = 0; i < ulClassTabs.length; i++){
//     if (ulClassTabs[1].dataset
//     console.log(ulClassTabs[1])
//}

const tabs = document.querySelector('.tabs');
tabs.addEventListener("click", fTabs);

function fTabs(event){
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
            } else {tabContent[i].classList.remove('active');}


        }
    }

}









