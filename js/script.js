$(document).ready(function(){

    $('.detail_button').click(function(){

        $('.large_details').slideToggle(500);

    });
    $('.js_small_btn_1').click(function(){

        $('.js_small_1').slideToggle(500);

    });
    $('.js_small_btn_2').click(function(){

        $('.js_small_2').slideToggle(500);

    });
    $('.js_blog_btn_1').click(function(){

        $('.js_blog_1').slideToggle(500);

    });
    $('.js_blog_btn_2').click(function(){

        $('.js_blog_2').slideToggle(500);

    });
});

/*
function showText (el) {
    if(el.previousElementSibling.style.display === "none") {
        el.previousElementSibling.style.display = "block";
        el.innerHTML = "ShowLess";
    } else {
        el.previousElementSibling.style.display = "none";
        el.innerHTML = "DETAILS";
    }
}*/