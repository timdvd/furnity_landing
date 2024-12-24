document.addEventListener('DOMContentLoaded', function(){

    /* search fucntion */
    document.addEventListener('click', function(event){
        if(event.target.closest('.nav-search')){
            document.querySelector('.search-bar').classList.add('search-bar-active');
        }
        else if(event.target.closest('.cancel-btn')){
            document.querySelector('.search-bar').classList.remove('search-bar-active');
        }
    });

    /* user functions */
    document.addEventListener('click', function(event){
        if(event.target.closest('.nav-user, .have')){
            const form = document.querySelector('.form');
            form.classList.add('login-active');
            form.classList.remove('register-active');
        }
        else if(event.target.closest('.register-btn')){
            const form = document.querySelector('.form');
            form.classList.remove('login-active');
            form.classList.add('register-active');
        }
        else if(event.target.closest('.form-cancel')){
            const form = document.querySelector('.form');
            form.classList.remove('login-active');
            form.classList.remove('register-active');
        }
    });

    // fix header
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function(){
        const currentPosition = window.scrollY;

        if(currentPosition === 0){
            header.classList.remove('header-fix');
        }
        else if(currentPosition < lastScrollY){
            header.classList.add('header-fix');
        }
        // else{
        //     header.classList.remove('header-fix');
        // }
        lastScrollY = currentPosition;
    });

    $(window).ready(function() {
        $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        arrows: false,
        });
    });


    $(document).ready(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });

});