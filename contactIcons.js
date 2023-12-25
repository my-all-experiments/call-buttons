$(document).ready(function () {
    var whatsAppLinks = '';
    var mobileNumber = '';
    var whatsAppIconPath = 'assets/whatsapp.png'
    var callIconPath = 'assets/call-icon.png'
    var contactIcons =
        '<a class="whats-app-link"  target="_blank"><img id="whatsapp-icon"   class="img-responsive whatsapp-icon" alt="whatsapp"></a>\
    <a class="mobile-number"><img id="call-icon"  class="img-responsive call-icon" alt="callapp" /></a>';

    $('.contact-icons').append(contactIcons);
    $('.whats-app-link').attr('href', whatsAppLinks);
    $('.mobile-number').attr('href', 'tel:' + mobileNumber);
    $('.whatsapp-icon').attr('src', whatsAppIconPath);
    $('.call-icon').attr('src', callIconPath);

});