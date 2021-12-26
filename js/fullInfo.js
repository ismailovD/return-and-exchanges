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
        selectBtns = document.querySelectorAll('.select__btn'),
        selectParent = '.select',
        selectItems = document.querySelectorAll('.select__item'),
        detailsContent = document.querySelector('.details'),
        screenMore = document.querySelector('.details__user'),
        seeMore = document.querySelector('.details__history-link'),
        historyCommit = document.querySelector('.details__history-events'),   
        warningMsg = document.querySelector('.warning'),
        warningClose = document.querySelector('.warning__close'),
        textareaParent = ".pop-up",
        textareasPopUp = document.querySelectorAll('.pop-up__textarea'),
        symbolCurent = '.pop-up__symbols-curent',
        symbolMax = '.pop-up__symbols-max',
        radioChoose = document.querySelectorAll('.choose__label'),
        detailBtns = document.querySelectorAll('.details__btn'),
        popUpBg = document.querySelector('.pop-up__wrapper'),
        popUpBlock = document.querySelectorAll('.pop-up__block'),
        popUpClose = document.querySelectorAll('.pop-up__close'),
        popUpCheck = document.querySelectorAll('.pop-up__input'), 
        popUpEdit = document.querySelectorAll('.pop-up__edit-icon'),
        popUpEmail = '.pop-up__label-hidden',
        popUpCheckParent = '.pop-up__changing-block',
        body = document.querySelector('body'),
        globalSearch = document.querySelector('.global__search-input'),
        globalSearchDropdown = document.querySelector('.global__search-dropdown');
        
globalSearch.addEventListener('input', () => { 
    if(globalSearch.value.length > 0){
        globalSearchDropdown.classList.add('active');
        setTimeout(()=> {
            globalSearchDropdown.classList.add('show');
        }, 100)
    }else {
        globalSearchDropdown.classList.remove('show');
        setTimeout(()=> {
            globalSearchDropdown.classList.remove('active');
        }, 100)
    }
}) 
    
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

selectBtns.forEach(btn => { 
    btn.addEventListener('click', () => {  
        document.querySelectorAll(selectParent).forEach(parent => {
            if(btn.closest(selectParent) != parent){
                parent.classList.remove('show-select')
            }
        })
        btn.closest(selectParent).classList.toggle('show-select') 
    });
}) 

selectItems.forEach(item => {
     item.addEventListener('click', () => {
        selectItems.forEach(el => {
            el.classList.remove('item-selected')
        })
        item.classList.add('item-selected'); 
        item.closest(selectParent).children[0].textContent = item.getAttribute('data-value');
        item.closest(selectParent).classList.remove('show-select')
     })
})  

textareasPopUp.forEach(writeTable => {
    let parent =  writeTable.closest(textareaParent);
    parent.querySelector(symbolMax).textContent = writeTable.getAttribute('maxlength');
    writeTable.value = 'Gets filled based selection on top. Can be edited if Others is selected in top drop down.'
    writeTable.addEventListener('input', () => { 
       parent.querySelector(symbolCurent).textContent = writeTable.value.length;  
    })
})

radioChoose.forEach(elem => {
    elem.addEventListener('click', () => { 
        radioChoose.forEach(k => {
            k.classList.remove('active')
        })
        if (elem.querySelector('input').checked) {
            elem.classList.add('active')
        }
    })
})

detailBtns.forEach(button => {
    button.addEventListener('click', () => { 
        button.classList.add('active');
        popUpBg.classList.add('show');
        setTimeout(() => {popUpBg.classList.add('change-bg');} , 200)
        let btnId = button.getAttribute('data-id'); 
        document.querySelector('#'+ btnId).classList.add('active');
        setTimeout(() => {document.querySelector('#'+ btnId).classList.add('visible')} , 200)
        // body.style.overflow = 'hidden'
    })
})

popUpClose.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        popUpBlock.forEach(block => {
            block.classList.remove('visible')
            setTimeout(() => {block.classList.remove('active')} , 200)
        })
        detailBtns.forEach(btns => {
            btns.classList.remove('active')
        })
        // popUpBg.classList.remove('show');
        setTimeout(() => {popUpBg.classList.remove('change-bg')} , 100)
        setTimeout(() => {popUpBg.classList.remove('show')} , 300)
        body.style.overflow = 'visible'
    })
})

// popUpBg.addEventListener('click', (e) => {
//     if(e.target === popUpBg ) { 
//         popUpBlock.forEach(block => {
//             block.classList.remove('active')
//         })
//         detailBtns.forEach(btns => {
//             btns.classList.remove('active')
//         })
//         popUpBg.classList.remove('show');
//         body.style.overflow = 'visible'
//     }
// })

popUpCheck.forEach(inp => {
    inp.addEventListener('change', () => {
        let parent = inp.closest(popUpCheckParent);
        if(inp.checked) { 
            parent.querySelector(popUpEmail).classList.add('show')
        }else  parent.querySelector(popUpEmail).classList.remove('show')
    })
})

popUpEdit.forEach(edit => {
    edit.addEventListener('click', () => { 
        let el = edit.previousElementSibling;
        el.disabled = false;  
        el.setAttribute('data-value', el.value); 
        el.addEventListener('change', () => {
            el.disabled = true;
        })
    })
})