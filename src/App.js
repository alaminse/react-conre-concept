import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar','Jaforr','salman'];

  const products = [
    {name:'Photoshop',price: '$40.99'},
    {name:'Photoshop1',price: '$50.99'},
    {name:'Photoshop3',price: '$70.99'}
  ]
  const productNames = products.map(product => product.name); //any thing you can declare hare product

  // const nayokNames = nayoks.map(nayok => nayok);

  var name = 'Noman';
  var person = {
    name: 'Alamin',
    job: 'student'
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1>my name {name}</h1>
        <h2>Name: {person.name + ' ' + person.job}</h2>

        <ul>
          {
            nayoks.map(nayok=> <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
            
          }
        </ul>
        <Person name={nayoks[0]} nayika='moushumi'></Person>
        <Person name='Joshim Nayok' nayika='shabana'></Person>
        <Person name='BappaRaz Nayok' nayika='chaka'></Person>

        {/* <Product name={products[0].name} price={products[0].price}> </Product> */}
        <Product product={products[1]}></Product>
        <Product product={products[0]}></Product> 

        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}

function Counter(){
  const [ count, setCount ] = useState(10);
  // const handleIncrease = () => {
  //   const newCount = count +1;
  //   setCount(newCount);

  //}
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onMouseMove={ () =>setCount(count+1)}>Increase</button>
      <button onClick = { () => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
          {/* <h3>{props.name}</h3>
          <h5>{props.price}</h5> */}
          {/* <h3>{props.product.name}</h3>
          <h5>{props.product.price}</h5> */}

          <h3>{name}</h3>
          <h5>{price}</h5>
          <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle = {
    color: 'red',
    border: '2px solid yellow',
    padding: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>software engineer</h3>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
