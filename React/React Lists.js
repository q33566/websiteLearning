function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
            {cars.map((car)=><Car brand = {car} />)}
        </ul>
      </>
    );
  }
  //Generally, the key should be a unique ID assigned to each item. 
  //As a last resort, you can use the array index as a key.
  function Garage() {
    const cars = [
        {id:0, brand:'Ford'},
        {id:1, brand:'BMW'},
        {id:2, brand:'Audi'}
    ];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
            {cars.map((car)=><Car key = {car.id} brand = {car.brand} />)}
        </ul>
      </>
    );
  }