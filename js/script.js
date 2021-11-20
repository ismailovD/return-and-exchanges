const tableTabs = document.querySelectorAll('.return__item'),
    tables = document.querySelectorAll('.table'),
    screenMore = document.querySelector('.details__user'),
    seeMore = document.querySelector('.details__history-link'),
    historyCommit = document.querySelector('.details__history-events'),
    sideBarBtn = document.querySelector('.side-bar__btn'),
    sideBar = document.querySelector('.return__aside'),
    closeSideBar = document.querySelector('.over__box'),
    body = document.querySelector('.return__body');
    
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


// const   goods = [
//     {   
//         id: "RA-1234",
//         requested: "4 Oct, 2021",
//         type: "Return",
//         reason: "Don't like",
//         image: "1.jpg",
//         state: "pending",
//         amount: -123,
//         size: "L", 
//         cost: 54,
//         pickup: 6,
//         metod: "credit"
//     },
//     {   
//         id: "RA-2345",
//         requested: "4 Oct, 2021",
//         type: "Exchange",
//         reason: "Don't like",
//         image: "2.jpg",
//         state: "process",
//         amount: -123,
//         size: "M", 
//         cost: 54,
//         pickup: 6,
//         metod: "cash"
//     },
//     {   
//         id: "RA-3456",
//         requested: "4 Oct, 2021",
//         type: "Return",
//         reason: "Don't like",
//         image: "3.jpg",
//         state: "Closed",
//         amount: 0,
//         size: "X L", 
//         cost: 54,
//         pickup: 6,
//         metod: "credit"
//     },
//     {   
//         id: "RA-4567",
//         requested: "4 Oct, 2021",
//         type: "Exchange",
//         reason: "Don't like",
//         image: "4.jpg",
//         state: "Overdue",
//         amount: -123,
//         size: "XXL", 
//         cost: 54,
//         pickup: 6,
//         metod: "cash"
//     }
// ] 
