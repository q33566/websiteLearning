//The JavaScript spread operator (...)
//quickly copy all or part of an existing array or object into another array or object.
//Array
const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [...num1,...num2];//[1,2,3,4,5,6]
console.log(num3);//1
const num4 = [1,2,3,4,5,6]
//often used in combination with destructuring.
const [index1, index2, ...theRest]=num4;
console.log(index1);//1
console.log(index2);//2
console.log(theRest);//[3,4,5,6]
//Object
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
  
const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
}
//the same properties "color" is overwritten by the last object that was passed  
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}