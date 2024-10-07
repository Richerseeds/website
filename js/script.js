

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.contact-button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = url('https://wa.me/1234567890'); // Replace with your WhatsApp number
        });
    });
});
