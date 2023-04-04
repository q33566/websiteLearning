//The .map() method allows you to run a function on each item in the array, returning a new array as the result.
const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map( (item) => <p>{item}</p>);//不加{}會視為string
.map()