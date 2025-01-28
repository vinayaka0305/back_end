// Importing the 'events' module from Node.js
const Events = require('events');

// Creating an instance of the EventEmitter class
const eventHandler = new Events();

// Registering an event listener for the 'click' event
eventHandler.on('click', () => {
    console.log('clicked'); // This will run when the 'click' event is emitted
});

// Emitting the 'click' event, triggering the above listener
eventHandler.emit('click');

// Registering another event listener for the 'message' event
eventHandler.on('message', () => {
    console.log('good evening!'); // This will run when the 'message' event is emitted
});

// Emitting the 'message' event, triggering the above listener
eventHandler.emit('message');


// Explanation of the Code:

// Importing the events Module: The events module provides the EventEmitter class, which allows you to create, manage, and emit events.

// Creating an Event Emitter Instance: The eventHandler instance is used to register event listeners and emit events.

// Registering Event Listeners: Using the .on() method, event listeners for click and message events are added. These listeners define what should happen when those events are triggered.

// Emitting Events: The .emit() method is used to trigger the respective events, which in turn calls the associated event listeners.