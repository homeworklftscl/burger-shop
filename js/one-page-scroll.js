$(document).ready (function () {
    
    var
        screen = 0,
        container = $('.maincontent'),
        page = $('.section'),
        inscroll = false;

    $('.section:first-child').addClass('section_active');    

    $('body').on('mousewheel', function (e) {

        var 
            activePage = page.filter('.section_active');
        
        if (!inscroll) {
            inscroll = true;

        
            if (e.deltaY > 0) {
                
                if (activePage.prev().length) {
                    console.log('dfdf');
                    screen--;
                    
                }

            } else {

                if (activePage.next().length) {
                    screen++;
                    console.log('zxcxc');

                }
            } 
        }

        var 
            position = (-screen * 100) + '%';
            console.log(position);

        page.eq(screen).addClass('section_active').siblings().removeClass('section_active');
        container.css('top', position);
        
        setTimeout(function () {
            inscroll = false;
        }, 1300);
    });    
});