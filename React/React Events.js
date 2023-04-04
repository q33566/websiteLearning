//HTML enents   syntax: onclick. enent handlers: onclick = "shoot()".
//React events  syntax: onClick. enent handlers: onClick = {shoot}.
/*
HTML
<button onClick={shoot}>Take the Shot!</button>
React
<button onclick="shoot()">Take the Shot!</button>
*/
function Football0(){
    const shoot = () =>{
        return<h1>Nice shot!</h1>;
    }

    return <button onClick={shoot}>Take a shot</button>;
    //onClick requires a function as an argument.
}
function Football1() {
    const shoot = (a) => {
      alert(a);
    }
  
    return (
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
      //function binding using arrow function
    );
  }
//React Event Object
function Football() {
    const shoot = (a, b) => {
      alert(b.type);
      /*
      'b' represents the React event that triggered the function,
      in this case the 'click' event
      */
    }
    return(
        <button onClick={(event)=>shoot('goal',event)}>Take the shot</button>
    );
}
