'use strict';


const addMessage = document.querySelector('#add-mes');
addMessage.addEventListener('click', () => {
    const createdMessage = new PopupMessage('Hello world!');
    createdMessage.initialization();
});
