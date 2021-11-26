const tableTabs = document.querySelectorAll('.return__item'),
    tables = document.querySelectorAll('.table'),
    screenMore = document.querySelector('.details__user'),
    seeMore = document.querySelector('.details__history-link'),
    historyCommit = document.querySelector('.details__history-events'),
    sideBarBtn = document.querySelector('.side-bar__btn'),
    sideBar = document.querySelector('.return__aside'),
    closeSideBar = document.querySelector('.over__box'),
    body = document.querySelector('.return__body'),
    warningMsg = document.querySelector('.warning'),
    warningClose = document.querySelector('.warning__close');
    
sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active'); 
    body.style.overflow ="hidden"
});
closeSideBar.addEventListener('click', (e) => {
     if(e.target == closeSideBar){
        sideBar.classList.remove('active'); 
        body.style.overflow ="visible"
     }
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

for (let key of historyCommit.children) {
    key.style.display = "none"
}
for (let i = 0; i < 5; i++) {
    historyCommit.children[i].style.display = "flex"
}

seeMore.addEventListener('click', () => {
    screenMore.classList.toggle('active');
    console.log(screenMore.classList.contains('active'));
    if (screenMore.classList.contains('active')) {
        for (let key of historyCommit.children) {
            key.style.display = "flex"
        }
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