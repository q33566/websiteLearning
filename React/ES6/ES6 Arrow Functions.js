//Regular function
//Variable represent the function!! not the return value!!
hello = function(){
    return "Hello word";
}
//Arrow function
hello = () =>{
    return "Hello word";
}
//only one statement -> It can be simplified -> remove "return"
//Implicit Return
hello = () => "Hello word";
//arrow function in one line, with parameters.
hello = (val) => "Hello " + val;
// skip the parentheses when you have only one parameter.
hello = val => "Hello " + val;
//???With a regular function, this represents the object that called the function:
//???With an arrow function, this represents the Header object no matter who called the function:
//What???
