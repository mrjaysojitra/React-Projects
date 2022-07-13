import './App.css';
import Button from './compones/Button/Button';
import {useState,useEffect} from 'react';


function App() {
  let a = [{"name": "Darshit",
           "lname": "Akbari",
            "age": 18}];

  const[value,setValue]=useState(0)

  const add = () =>{
    setValue(value + 1)
  }

  const mines = () =>{
    setValue(value - 1)
  }

  useEffect(() => {
    console.log(value)
  },[value])

  return (
    <div className="App">
    <Button title={'Darshit'} color={'primary'}/>
    <Button title={'Jensi'} color={'secondry'}/>
    <Button title={'Daksh'} color={'danger'}/>
    <Button title={'Ravi'} color={'danger2'}/>
    <h1>{a.map((item) => <p>My Name Is {item.name} <br></br> My Age Is {item.age} </p>)}</h1>
    
    {value}
    <button onClick={()=>add()}>add</button>


    <button onClick={()=>mines()}>mines</button>
    </div>
  );
}



export default App;
