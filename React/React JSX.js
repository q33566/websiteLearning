//Allowing us to write HTML in JS.
//You are not required to use JSX, but JSX makes it easier to write React applications.
//Use jsx
import React from 'react';
import ReactDOM from 'react-dom';
const myElement0 = <h1>Hi jsx</h1>
const root0 = ReactDOM.creatRoot(document.getElementById('root'));
root0.render(myElement0);
//Not use
const myElement1 = React.createElement('h1', {}, 'I do not use JSX!');
const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(myElement1);
//Expression in JSX
//Write JS expressions inside curly braces { }
const myElement3 = <h1>I'm {5+5} years old</h1>;
//Inserting a Large Block of HTML
//put the HTML inside parentheses
const myElement4 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );
//One Top Level Element
//The HTML code must be wrapped in ONE top level element.
//Wrap two paragraphs inside one DIV element:
const myElement5 = (
    <div>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </div>
  );
//JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.
/*Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.
A fragment looks like an empty HTML tag: <></>.*/
const myElement6 = (
    <>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </>
  );
//Elements Must be Closed
const myElement7 = <input type="text" />;
//It is equivalent to <input type="text"></input> 
//Attribute class = className
// When JSX is rendered, it translates className attributes into class attributes. 
const myElement8 = <h1 className='myclass'>Hello world</h1>
//Example: Conditions 
//if statement outside JSX
const x = 5;
let text = "Goodbye";
if(x>=10){
  text = "Hello";
}
const myElement9 = <h1>{text}</h1>;
//ternary expression 
const myElement10 = <hi>{(x>=10) ? "Goodbye":"Hello"}</hi>
