const Event = require('events');

const eventHandler = new Event();

eventHandler.on('click',()=>{
    console.log("hello")
})


eventHandler.emit('click');

