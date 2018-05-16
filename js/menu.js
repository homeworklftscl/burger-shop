(function () {
    let menuList = document.querySelector('.menu__list');

    menuList.addEventListener('click', function (e) {
        
        if (e.target.classList.contains('menu__trigger')) {
            e.preventDefault();    

            let _this = e.target;
            let item = _this.parentNode;
            let list = item.parentNode;
            let items = list.children;
            let content = _this.nextElementSibling;
    
            if (!item.classList.contains('menu__item_active')) {
                for (let i = 0; i < item.length; i++) {
                    item[i].classList.remove('menu__item_active');
                }

                item.classList.add('menu__item_active');
            } else {
                item.classList.remove('menu__item_active');
            }
        }
        
    });
    
});