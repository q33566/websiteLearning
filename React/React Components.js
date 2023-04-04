//React components: serves the same purpose with JS functions.
//two types, Class components and Function components.
//the component's name MUST start with an upper case letter.
//Example: Class component
/*
Inheritence in order to use functions from React.Component.
Requiring a render to return HTML.
*/
class Car extends React.Component{
    render(){
        <h1>A car</h1>;
    }
}
//Example: Function Component
function Car0(){
    return <h1>A car</h1>;
}
//Example: Rendering a Component
const root0 = ReactDOM.createRoot(document.getElementById('root'));
root0.render(<car0/>);
//Example: Props
/*
Props(properties) like function arguments,
sending them into the component as attributes.
*/
function Car1(props){
    return <h1>A props.color car</h1>;
}
const root1 = ReactDOM.CreateRoot(document.getElementById('root'));
root1.render(<Car color = "red" />);
//Example: Components in Components
function Garage(){
    return(
        <>
            <h1>Who live in my garage?</h1>
            <Car />
        </>
    );// ";"behind return statement not behind HTML.
    //Using parenthesis to insert a block of HTML.
}
//Example: Components in Files
//Car2.js
function Car2(){
    return <h2>A car</h2>;
}
export default Car2;
//another file
import Car2 from './Car2.js';