//    ハンバーガーメニュー     
$(function () {

    $('.toggle_btn').on('click', function () {
        if ($('#header').hasClass('open')) {
            $('#header').removeClass('open');

        } else {
            $('#header').addClass('open');
        }
    });

    $('#mask').on('click', function () {
        $('#header').removeClass('open');
    });

});


// 

// #to_topをクリックした際の設定
$(function () {
    $('#to_top').click(function () {
        $('body,html').animate({
            scrollTop: 0//ページトップまでスクロール
        }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
        return false;//リンク自体の無効化
    });
});



    // // トップページフェードUP
    function fadeAnime() {

        $('.life_1,.life_2,.life_day_figure').each(function () {
            var elemPos = $(this).offset().top - 50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('fadeUp');
            } else {
                $(this).removeClass('fadeUp');
            }
        });
    }


    $(window).scroll(function () {
        fadeAnime();
    });

// コンタクトフォーム

    $(function() {
        // validate
        $("#contact").validate({
            // Set the validation rules
            rules: {
                name1: "required",
                email: {
                    required: true,
                    email: true
                },
                message: "required",
            },
            // Specify the validation error messages
            messages: {
                name1: "Please enter your name",
                email: "Please enter a valid email address",
                message: "Please enter a message",
            },
            // submit handler
            submitHandler: function(form) {
              //form.submit();
                $(".message").show();
                $(".message").fadeOut(4500);
            }
        });
    });