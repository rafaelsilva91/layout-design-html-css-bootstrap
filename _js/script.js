/*alert(' Javascript Funcionando! ') */


$(document).ready(function()
    {
       
    //scroll para seções da pagina

    let navBtn = $('.menu-item');
    
    let home       			= $('#home-menu');
    let about  		        = $('#about-area');
    let service  		    = $('#service-area');
    let clients             = $('#clients-area');
    
    let scrollTo = '';

    $(navBtn).click(function(){

        let btnId = $(this).attr('id');
        
        console.log(btnId);

        if(btnId == 'home-menu'){
            scrollTo = home;
        }
        else if (btnId == 'about-menu'){
            scrollTo = about;
        }
        else if (btnId == 'service-menu'){
            scrollTo = service;
        }
        else if (btnId == 'client-menu'){
            scrollTo = clients;
        }
       
        else {
            scrollTo = home;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 2000);

    });


    /* 
       Fiz a utilização de um plugin apenas para animação dos numeros do campo data-area
    */


    var waypoints = $('#valor').waypoint(function(direction) {
    $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 900,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        }, {
                offset: '100%'
        })
    


});

