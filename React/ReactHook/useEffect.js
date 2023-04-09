/*
useEffect Hook allow we to perform "side effect"(??) in our components.
Some example of side effects: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)

The first argument is required and should be a function that contains 
the code for the side-effect that you want to perform. This function 
will be executed after the component has rendered for the first time, 
and then re-executed whenever any of the dependencies have changed.

The second argument is optional and is an array of dependencies that 
determine when the side-effect function should be re-executed. If the 
array is empty, the side-effect function will only be executed once, 
after the component has rendered for the first time. If the array contains 
any dependencies, the side-effect function will be re-executed whenever 
any of the dependencies have changed.

*/
//Example Timer
import { useState, useEffect } from "react";

function Timer0(){
    const [count0, setCount0] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount0((count) => count + 1); ////only one statement,remove the brackets and the return keyword:
        }, 1000);
    },[]);
    return <h1>I've rendered {count0} times!</h1>;
}
//Example: Dependency 
/*
1. No dependency passed:
    useEffect(() => {
    //Runs on every render
    });
2. An empty array:
    useEffect(() => {
    //Runs only on the first render
}, []);
3. Props or state values:
    useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
}, [prop, state]);

*/

//Example:A useEffect Hook dependent on a variable.
function Counter(){
    const [count1, setCount1] = useState(0);
    const [calculation, setCalculation] = useState(0);
    
    useEffect(() => {
        setCalculation(() => count1*2)
    },[count1]);

    return(
        <>
            <div>count:{count1}</div>
            <button onClick={() =>{setCount1((count)=>count+1)}}>+</button>
            <div>Calculation:{calculation}</div>
        </>
    )
}
/*
We do effect cleaning up by including a return function at the end of the useEffect Hook.
*/
//Example: Effect clean up
function Timer1() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let timer = setTimeout(() => { //To clear the timer, we had to name it.
      setCount((count) => count + 1);
    }, 1000);
  
    return () => clearTimeout(timer)
    }, []);
  
    return <h1>I've rendered {count} times!</h1>;
  }
