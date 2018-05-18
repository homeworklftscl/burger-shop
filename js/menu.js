    let menuList = document.querySelector('.menu__list');

    menuList.addEventListener('click', function (e) {
        e.preventDefault(); 
        if (e.target.classList.contains('menu__trigger') || 
            e.target.classList.contains('menu__title')){
               

            let _this = e.target;
            if (_this.tagName == 'DIV') {
                _this = _this.parentNode;
            }
            let item = _this.parentNode;
            let list = item.parentNode;
            let items = list.children;
            let content = _this.nextElementSibling;
    
            if (!item.classList.contains('menu__item_active')) {
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove('menu__item_active');
                }

                item.classList.add('menu__item_active');
            } else {
                item.classList.remove('menu__item_active');
            }
        }
        
    });