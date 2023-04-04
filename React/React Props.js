//React props like argument in JS function, attribute in HTML.
//Add attribute to a component's element.
//The component's the argument as an object.
//Example 1
function Car(props){
    return <h1>It is {props.brand}</h1>;
}
const myElement = <Car brand = 'Ford'/>;
//Example 2
function Garage0(){
    return(
        <>
            <h1>Who lives in my garage</h1>
            <Car brand = "Fort"/>

        </>
    );
}
//Example 3: Passing variables
const carName = "Fort";
function Garage1(){
    return(
        <>
            <h1>Who lives in my garage</h1>
            <Car brand = {carName}/>
        </>
    );
}
//Example 4: Passing objects
const carInfo = {name: "Ford", model: "Musting"};
function Garage2(){
    return(
        <>
            <h1>Who lives in my garage</h1>
            <Car brand = {carInfo}/>
        </>
    );
}
