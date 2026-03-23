(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
      // Carrega o header/navbar (está em includes/)
    $("#header-placeholder").load("includes/header.html", function(response, status, xhr) {
        if (status === "error") {
            console.error("Erro ao carregar includes/header.html: " + xhr.status);
            // Mostra mensagem de erro visível (opcional)
            $("#header-placeholder").html('<div class="alert alert-danger text-center">Falha ao carregar o cabeçalho</div>');
        } else {
            // Opcional: código extra após carregar (ex: eventos dos botões Dia/Semana)
            console.log("Header carregado com sucesso");
        }
    });

    // Carrega o footer
    $("#footer-placeholder").load("includes/footer.html", function(response, status, xhr) {
        if (status === "error") {
            console.error("Erro ao carregar includes/footer.html: " + xhr.status);
            $("#footer-placeholder").html('<div class="alert alert-danger text-center">Falha ao carregar o rodapé</div>');
        } else {
            // Atualiza o ano automaticamente
            const anoSpan = document.getElementById("anoAtual");
            if (anoSpan) {
                anoSpan.textContent = new Date().getFullYear();
            }
            console.log("Footer carregado com sucesso");
        }
    });
})(jQuery);


function abrirMapa() {
    document.getElementById("mapModal").style.display = "block";
}

function fecharMapa() {
    document.getElementById("mapModal").style.display = "none";
}

// fechar ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById("mapModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}