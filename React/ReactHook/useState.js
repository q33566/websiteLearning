import { func } from "prop-types";
import { useState } from "react";
/*

useState accepts an initial state and returns two values:
The current state.
A function that updates the state.

The first value, color, is our current state.
The second value, setColor, is the function that is used to update our state.

*/
//Example: create multiple state Hooks to track individual values.
function Car0(){
    const [color, setColor] = useState("blue");//Initialize current state "blue"
    //We can now include our state "color" anywhere in our component.
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang")
    const [year, setYear] = useState("1964");
    return(
    <>  
        <button 
        type = "button"
        onClick = {()=>setColor("red")}//never use color = "red" to directly update state.
        >Red</button>
        <h1>My {brand}</h1> {/*read state.*/}
        <p>It is a {color} {model} from {year}</p> {/*read state.*/}
    </>  
    );
}
/*
What Can State Hold
strings, numbers, booleans, arrays, objects, and any combination of these!
*/
//Example:track count variable
function keepCount(){
    const [count, setCount] = useState(0)
}
//Example: Create a single hook that holds an object.
function Car1(){
    const [car, setCar] = useState({
        color: "blue",
        brand: "Ford",
        model: "Mustang",
        year: "1964"
    });

    const updateColor = () => {
        setCar(previous => {
            return {...previous,color:"blue"}
            //When a function is passed to "setCar", it receives the current state 
            //as its parameter(previousState) and returns a new state.
            //This is useful when updating the state depends on the previous state.
            //only one line, so we can omit return and ;
        });
    }
    return(
        <>
            <h1>My {car.brand}</h1>
            <p>It is a {car.color} {car.model} from {car.year}</p>
            <button 
            type = "button"
            onClick = {updateColor}//onClick attribute accepts a function 
            >Red</button>
        </>
    );
}