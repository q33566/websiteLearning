//old ways of assigning array item
const vehicles0 = ['mustang', 'f-150', 'expedition'];
const car0 = vehicles[0];
const truck0 = vehicles[1];
const suv0 = vehicles[2];
//Destructing Array
const vehicles1 = ['mustang', 'f-150', 'expedition'];
const [car1, truck1, suv1] = vehicles;
const [car2,,suv2] = vehicles;
//Destructuring comes in handy when a function returns an array:
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
}
const [add, subtract, multiply, divide] = calculate(4, 7);
//Old way of using an object as an parameter.
const vehicleOne = {brand: 'Ford', model: 'Mustang', type: 'car', year: 2021, color: 'red'}
function myVehicle1(vehicle){
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}
myVehicle(vehicleOne);
//Destructing Notice that the object properties do not have to be declared in a specific order.
const vehicletwo = {brand: 'Ford', model: 'Mustang', type: 'car', year: 2021, color: 'red'}
function myVehicle1({type, color, brand, model}){
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}
//destructure deeply nested objects
myVehicle(vehicleTwo);
const vehicleThr = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  myVehicle(vehicleThr)
  function myVehicle({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
  }