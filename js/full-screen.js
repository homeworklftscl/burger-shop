//FULL-SCREEN
(function () {
    let mainWrap = document.querySelector('.wrapper');
    let ham = document.querySelector('#open');
    let template = document.querySelector('#full-screen').innerHTML;
    let overlay = createOverlay(template);

    ham.addEventListener("click", function () {
        overlay.open();
        initEvent();
    });

    function createOverlay(template) {
        let fragment = document.createElement('div');

        fragment.innerHTML = template;

        let fullMenu = fragment.querySelector(".full-screen");
        let closeMenu = fragment.querySelector("#close");
        let list = fragment.querySelector(".full-screen__list");

        fragment = null;

        closeMenu.addEventListener('click', function () {
            mainWrap.removeChild(fullMenu);
            
        });

        list.addEventListener('click', function (e) {
            if (e.target.classList.contains('full-screen__link')) {
                mainWrap.removeChild(fullMenu);
            }
        });

        return {
            open() {
                mainWrap.insertBefore(fullMenu, mainWrap.firstChild);
            }
        }
    }
}());
