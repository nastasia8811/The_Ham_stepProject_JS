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