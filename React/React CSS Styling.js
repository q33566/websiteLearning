//Inline Styling
//the value must be a JavaScript object:
//Example
const Header0 = ()=>{
    return(
        <>
            <h1 style = {{color: "red"}}>Hello style</h1>;
            <p>Add a little style</p>
        </>
    )
}
//camelCased Property Names
//background-color -> backgroundColor

const Header1 = ()=>{
    return(
        <>
            <h1 style = {{backgroundColor: "red"}}>Hello style</h1>;
            <p>Add a little style</p>
        </>
    )
}
//Object with styling information
const Header2 = () => {
    const myStyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Sans-Serif"
    };
    return (
      <>
        <h1 style={myStyle}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }
//Example: Css stylesheet
//import './App.css';
//Example: CSS Modules 
/*
The CSS inside a module is available only for the 
component that imported it, and you do not have 
to worry about name conflicts.
*/
/*my-style.module.css
.bigblue {
    color: DodgerBlue;
    padding: 40px;
    font-family: Sans-Serif;
    text-align: center;
  }
*/
/*Car.js:
import styles from './my-style.module.css'; 

const Car = () => {
  return <h1 className={styles.bigblue}>Hello Car!</h1>;
}

export default Car;
*/