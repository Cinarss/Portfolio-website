const input = document.querySelector('#txtChar');
const eventKey = document.querySelector('#event-key');
const keyWhich = document.querySelector('#key-which');
const eventCode = document.querySelector('#event-code');




input.addEventListener('keyup',eventHandler);


function eventHandler(e){
    
    
    document.querySelector('#key-which').innerHTML = e.keyCode;
    document.querySelector('#key-code').innerHTML = e.target.value;
    document.querySelector('#event-key').innerHTML = e.target.value;
    document.querySelector('.code').innerHTML = e.keyCode;
    input.value = '';
    
}