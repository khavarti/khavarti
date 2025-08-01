$(document).ready(function() {
    // MagnificPopup per immagini
    var magnifPopup = function() {
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            image: {
                titleSrc: function() {
                    return ''; // Disabilita i titoli nei popup
                }
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };

    // MagnificPopup per video
    var magnifVideo = function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    };

    // Chiama le funzioni
    magnifPopup();
    magnifVideo();
});
