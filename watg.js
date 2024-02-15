function openWhatsAppLink() {
    var whatsappLink = 'whatsapp://send/?phone=18056009130&text=YourMessageHere';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.telegram.org/bot' + tokenBot + '/sendMessage?chat_id=' + chatId + '&text=Opening+WhatsApp+Link', true);
    xhr.send();
    
    window.location.href = 'xdg-open:' + whatsappLink;  // Use xdg-open here
}

openWhatsAppLink();
