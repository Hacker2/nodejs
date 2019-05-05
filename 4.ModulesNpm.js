var mm = require ('./mymodule');
mm.hello_world();

var car = mm.create_car(3.0);
console.log(car.engine);

var car2 = new mm.create_car2(3.0);
console.log(car2.engine);