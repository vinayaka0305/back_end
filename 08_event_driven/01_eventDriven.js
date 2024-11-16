const Events = require('events');


const eventHandler = new Events()

eventHandler.on('call',()=>{
    console.log('event triggers')
})

eventHandler.on('message',()=>{
    console.log('hello vinayaka')
})

eventHandler.emit('call');
eventHandler.emit('message');