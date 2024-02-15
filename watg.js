function openWhatsAppLink() {
    var whatsappLink = 'https://api.whatsapp.com/send/?phone=18056009130&text=YourMessageHere&type=phone_number&app_absent=0';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.telegram.org/bot' + tokenBot + '/sendMessage?chat_id=' + chatId + '&text=Opening+WhatsApp+Link', true);
    xhr.send();
    
    window.location.href = 'xdg-open:' + whatsappLink;  // Use xdg-open here
}

openWhatsAppLink();
