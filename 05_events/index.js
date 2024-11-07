const Events = require('events');

const eventHandlers = new Events();

eventHandlers.on('click',()=>{
    console.log('clicked')
})

eventHandlers.emit('click');


eventHandlers.on('message',(input)=>{
    console.log(input);
})

eventHandlers.emit('message','welcome to node js')