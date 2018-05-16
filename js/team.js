//TEAM
    let teamList = document.querySelector('.accordeon__list');
        
    teamList.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.classList.contains('teammate__name')) {
            

            let _this = e.target;
            let item = _this.parentNode;
            let list = item.parentNode;
            let items = list.children;
            let content = _this.nextElementSibling;
            let contentHeight = content.firstElementChild.clientHeight;

            if (!item.classList.contains('accordeon__item_active')) {
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove('accordeon__item_active');
                    items[i].lastElementChild.style.height = 0;
                }

                item.classList.add('accordeon__item_active');
                content.style.height = contentHeight + 'px';
                
            }else {
                item.classList.remove('accordeon__item_active');
                content.style.height = 0;
            }
    }});


