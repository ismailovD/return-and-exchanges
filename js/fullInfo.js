const   sideBarBtn = document.querySelector('.side-bar__btn'),
        sideBar = document.querySelector('.side-bar'), 
        pageContent =document.querySelector('.global__content'), 
        visitedPage = document.querySelectorAll('.global-item'),
        userDropdown = document.querySelector('.global__auth'),
        userBtn = document.querySelector('.user__dropdown-btn'),
        sideBarSet = '.side-bar__settings',
        dropdownList = document.querySelector('.side-bar__settings'),
        dropdownBtn = document.querySelector('.side-bar__dropdown'), 
        tableTabs = document.querySelectorAll('.return__item'),
        tables = document.querySelectorAll('.table'),
        detailsContent = document.querySelector('.details'),
        screenMore = document.querySelector('.details__user'),
        seeMore = document.querySelector('.details__history-link'),
        historyCommit = document.querySelector('.details__history-events'),   
        warningMsg = document.querySelector('.warning'),
        warningClose = document.querySelector('.warning__close');
    
sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active'); 
        if(sideBar.classList.contains('active')){  
            pageContent.style.marginLeft = "275px"; 
            detailsContent.classList.add('change'); 
            someHistory();
    }else {  
        dropdownList.classList.remove('active')
        pageContent.style.marginLeft = "65px";  
        detailsContent.classList.remove('change')
        allHistory()
    }
}); 
dropdownBtn.addEventListener('click', () => {
    dropdownList.classList.toggle('active'); 
    if(dropdownList.classList.contains('active')){
        sideBar.classList.add('change-height')
    }else sideBar.classList.remove('change-height')
})

userBtn.addEventListener('click', () => {
    userDropdown.classList.toggle('open')
});

visitedPage.forEach(item => {
    item.addEventListener('click', ()=> {
        visitedPage.forEach(elem => {
            elem.classList.remove('visited')
            if(elem.closest(sideBarSet)){
                elem.closest(sideBarSet).classList.remove('visited')
            }
        })
        if(item.closest(sideBarSet)){ 
            item.closest(sideBarSet).classList.add('visited')
        }
        item.classList.add('visited')
    })
})
tableTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tableTabs.forEach(el => {
            el.classList.remove('active')
        });
        tab.classList.add('active');
        tables.forEach(table => {
            table.classList.remove('show');
        });
        document.querySelector('#' + tab.getAttribute('data-table')).classList.add("show");
    })
})

function someHistory() {
    for (let key of historyCommit.children) {
        key.style.display = "none"
    }
    for (let i = 0; i < 5; i++) {
        historyCommit.children[i].style.display = "flex"
    }
}
someHistory()


function allHistory() {
    for (let key of historyCommit.children) {
        key.style.display = "flex"
    }
}
seeMore.addEventListener('click', () => {
    screenMore.classList.toggle('active'); 
    if (screenMore.classList.contains('active')) {
        allHistory()
        seeMore.innerHTML = "See less..."
    } else {
        for (let key of historyCommit.children) {
            key.style.display = "none"
        }
        for (let i = 0; i < 5; i++) {
            historyCommit.children[i].style.display = "flex"
        }
        seeMore.innerHTML = "See all..."
    }

})
 
warningClose.addEventListener('click', () => {
    warningMsg.classList.add('hide');
    setTimeout(() => {warningMsg.classList.add('close')},400)
})