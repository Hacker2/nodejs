const EventEmitter = require('events').EventEmitter;

class Dog extends EventEmitter {};
let myDog = new Dog();

myDog.on('bark', () => {
  console.log('WHO\'S AT THE DOOR?');
});
myDog.emit('bark');

myDog.on('chew', (item) => {
  console.log(`chew chew ${item}`);
});
myDog.emit('chew', 'shoe');

var f = () => {
  console.log('more listener');
}
myDog.on('chew', f);

myDog.emit('chew', 'shoe');

myDog.removeListener('chew', f);
myDog.emit('chew', 'shoe');

myDog.once('chew', f);

myDog.emit('chew', 'shoe');
myDog.emit('chew', 'shoe');

console.log(myDog.eventNames());
console.log(myDog.listenerCount('chew'));
myDog.removeAllListeners("chew");
console.log(myDog.eventNames());
console.log(myDog.listenerCount('chew'));