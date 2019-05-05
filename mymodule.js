exports.hello_world = function () {
  console.log("Hello World");
}

function Car (engine) {
  this.engine = engine;
}
exports.create_car = function (parms) {
return new Car(parms);
}

exports.create_car2 = Car;