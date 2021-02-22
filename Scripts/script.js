$(function () {
    $("#PG2 #CONT form #frm1 #btn").click(function () {
        $('#PG2 #CONT form .img').css({
            transform: 'translate(-624px)',
            '-webkit-transition-duration': '1s',
            animation: 'img 2.0s  ease',

        });
        $("#PG2 #CONT form #frm1").fadeOut(1000);
        $('#PG2 #CONT form #frm2').css({
            visibility: 'visible',
            position: 'absolute',
            float: 'right',
            margin: ' 0 0 0 639px'
        });
        AOS.refresh();
    });
    $("#PG2 #CONT form #frm2 .btn2").click(function () {
        if (window.innerWidth > 500) {
            $("#PG2 #CONT form #frm2").fadeOut(200);
            $('#PG2 #CONT form .img').css({
                'background-size': 'cover',
                width: '100%',
                transform: 'translate(0px)',
            });
            $('#PG2 #msg').css({
                visibility: 'visible',
                animation: 'text-fel 2.0s ',
            });
        }
        else {
            $("#PG2 #CONT form #frm2").fadeOut(200);
            $("#PG2 #CONT form #frm1").fadeOut(200);
            $('#PG2 #msg').css({
                visibility: 'visible',
                animation: 'text-fel 2.0s ',
            });

            $(' #PG2 #CONT ').css({
                height: '630px',

            });
        }
    });
    /***********  P A G E  SH OP ****************** */

    $('section article').mouseenter(function () {
        /*
                $('section article .TBar div').css(
                    { animation: 'ICO 0.8s ease-in-out' }
                )*/
    })
    $('section article').mouseleave(function () {
        $('section article .TBar div').css(
            { animation: 'none' }
        )
    })
    $('section article .TBar .fav').click(function () {
        $('alert.FAV').html('<div id="ico" data-aos="zoom-out-left" data-aos-delay="600"> <img src="../Images/PG-3/checked.svg"> </div> <h1 data-aos="zoom-out-left" data-aos-delay="1000"> Ajouté avec succès à la liste des favoris </h1>');
        AOS.refresh();
        $('alert.FAV').css({
            width: '600px',
            height: '80px',
            'transition-duration': '0.9s',
            'z-index': '1'
        })

        $('alert.BUY').css({
            width: '0px',
            height: '80px',
            'transition-duration': '2s',
        })
        $('alert.BUY h1').css({
            animation: 'FadeOutText .4s ease-in',
            'animation-fill-mode': 'both',

        })
        setTimeout(() => {
            $('alert.FAV').css({
                width: '0px',
                height: '80px',
                'transition-duration': '2s',
            })
            $('alert.FAV h1').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',

            })
            $('alert.FAV #ico').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',

            })
            $('alert.BUY').css({
                width: '0px',
                height: '80px',
                'transition-duration': '2s',
            })
            $('alert.BUY h1').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',
            })
            $('alert.BUY #ico').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',

            })

        }, 2500);

    });





    $('section article .TBar .buy').click(function () {
        $('alert.BUY').html('<div id="ico" data-aos="zoom-out-left" data-aos-delay="600"> <img src="../Images/PG-3/checked.svg"> </div> <h1 data-aos="zoom-out-left" data-aos-delay="1000"> Ajouté avec succès au panier</h1>');
        AOS.refresh();
        $('alert.BUY').css({
            width: '600px',
            height: '80px',
            'transition-duration': '0.9s',
        })
        $('alert.BUY #ico').css({
            animation: 'ICO 1.5s  ease-in-out'
        })
        $('alert.FAV').css({
            width: '0px',
            height: '80px',
            'transition-duration': '2s',
        })
        $('alert.FAV h1').css({
            animation: 'FadeOutText .4s ease-in',
            'animation-fill-mode': 'both',

        })
        setTimeout(() => {
            $('alert.FAV').css({
                width: '0px',
                height: '80px',
                'transition-duration': '2s',
            })
            $('alert.FAV h1').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',

            })
            $('alert.FAV #ico').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',

            })
            $('alert.BUY').css({
                width: '0px',
                height: '80px',
                'transition-duration': '2s',
            })
            $('alert.BUY h1').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',
            })
            $('alert.BUY #ico').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',

            })

        }, 2500);
    });
    $('section article .TBar .inf').click(function () {
        $('#border').css({
            width: window.innerWidth,
            height: window.innerHeight,
            position: 'fixed',
            top: '0',
            left: '0',
        })
        $('#SCont').css({
            animation: 'opacity 2s',
            'animation-fill-mode': 'both',
            left: (window.innerWidth - 1000) / 2,
            top: (window.innerHeight - 600) / 2,
        })
    });
    $('#border').click(function () {
        $('#SCont').css({
            animation: 'unopacity 0.01s ease-in-out',
            'animation-fill-mode': 'both',
        })
        $('#border').css({
            width: 0,
            height: 0,
        })
    })
    $('#ART1').click(function () {
        $('#SCont #PIC').html(' <img src="Images/BabyProducts/81MKujcFjfL.jpg" alt="">')
    });
    $('#ART2').click(function () {
        $('#SCont #PIC').html(' <img src="Images/BabyProducts/download (1).jpg" alt="">')
    });
    $('#ART3').click(function () {
        $('#SCont #PIC').html(' <img src="Images/BabyProducts/download (2).jpg" alt="">')
    });
    $('#ART4').click(function () {
        $('#SCont #PIC').html(' <img src="Images/BabyProducts/download (3).jpg" alt="">')
    });
    $('#ART5').click(function () {
        $('#SCont #PIC').html(' <img src="Images/BabyProducts/download.jpg" alt="">')
    });
    $('#ART6').click(function () {
        $('#SCont #PIC').html(' <img src="Images/BabyProducts/images.jpg" alt="">')
    });
    $('#ART7').click(function () {
        $('#SCont #PIC').html(' <img src="Images/BabyProducts/Natural-Baby-Products-Honest-Company.jpg" alt="">')
    });
    $('#ART8').click(function () {
        $('#SCont #PIC').html(' <img src="Images/BabyProducts/download (2).jpg" alt="">')
    });
    $('#ART9').click(function () {
        $('#SCont #PIC').html(' <img src="Images/BabyProducts/images (2).jpg" alt="">')
    });
    $('#ART10').click(function () {
        $('#SCont #PIC').html(' <img src="Images/BabyProducts/images (1).jpg" alt="">')
    });
    $('#SCont #Cont button').click(function () {
        $('#SCont').css({
            animation: 'unopacity 0.01s ease-in-out',
            'animation-fill-mode': 'both',
        })
        $('#border').css({
            width: 0,
            height: 0,
        })
        $('alert.BUY').html('<div id="ico" data-aos="zoom-out-left" data-aos-delay="600"> <img src="../Images/PG-3/checked.svg"> </div> <h1 data-aos="zoom-out-left" data-aos-delay="1000"> Ajouté avec succès au panier</h1>');
        AOS.refresh();
        $('alert.BUY').css({
            width: '600px',
            height: '80px',
            'transition-duration': '1.9s',
        })
        $('alert.BUY #ico').css({
            animation: 'ICO 1.5s  ease-in-out'
        })
        setTimeout(() => {
            $('alert.FAV').css({
                width: '0px',
                height: '80px',
                'transition-duration': '2s',
            })
            $('alert.FAV h1').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',

            })
            $('alert.FAV #ico').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',

            })
            $('alert.BUY').css({
                width: '0px',
                height: '80px',
                'transition-duration': '2s',
            })
            $('alert.BUY h1').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',
            })
            $('alert.BUY #ico').css({
                animation: 'FadeOutText .4s ease-in',
                'animation-fill-mode': 'both',

            })

        }, 2500);

    });

    $('#SOM').click(function () {
        $('#SOM').css({
            animation: 'cliked .3s ease-in-out',

        })
        $('#PG3 #SOME').css({
            transform: 'translateY(100px)',
            'transition-duration': '1.3s',
            opacity: '1',
        })
        setTimeout(() => {
            $('#PG3 #SOME').css({
                transform: 'translateY(0px)',
                'transition-duration': '2s',
                opacity: '0',
            })
        }, 5000)

    });

});