'use strict';


const addMessage = document.querySelector('#add-mes');
addMessage.addEventListener('click', () => {
    const createdMessage = createMessage('Hello World!');
    addMessageWrapper(createdMessage);
    deleteMessage(createdMessage);
});

function createMessage(textMessage, backgroundMessage = '#e4aff5') {
    const message = document.createElement('div');
    message.classList.add('popup-massage');
    message.style.background = backgroundMessage;
    message.textContent = textMessage;
    return message;
}

function addMessageWrapper(nodeMessage) {
    let messageWrap = document.querySelector('.message-wrapper');
    // Если нет контейнера для сообщений, то мы его создаём
    if (!messageWrap) {
        messageWrap = document.createElement('div');
        messageWrap.classList.add('message-wrapper');
        document.body.append(messageWrap);
    }
    // Добавили в контейнер сообщение, контейнер либо был, либо мы его создали
    messageWrap.append(nodeMessage);
}

function deleteMessage(nodeMessage, delayRemove = 3000) {
    setTimeout(() => {
        nodeMessage.remove();
        const allMessage = document.querySelectorAll('.popup-massage');
        // Если сообщений больше нет, удаляем контейнер для них
        if (allMessage.length == 0) {
            document.querySelector('.message-wrapper').remove();
        }
    }, delayRemove);
}