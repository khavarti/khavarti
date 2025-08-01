$(document).ready(function() {
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            titleSrc: function() {
                return ''; // Disabilita i titoli nei popup
            }
        }
    });
});
