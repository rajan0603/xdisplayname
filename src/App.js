import './App.css';
import React, {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const buttonClick = (e) => {
    e.preventDefault();
    if(name && lastName){
      setIsSubmit(true);
    }
    else{
      setIsSubmit(false);
    }
  }

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit = {buttonClick}>
        <div>
          <label className = "box">First Name:</label>
          <input type = "text" onChange = {(e) => setName(e.target.value)} required></input>
        </div>
        <div>
          <label className='box'>Last Name:</label>
          <input type = "text" onChange = {(e) => setLastName(e.target.value)} required></input>
        </div>
        <button type = "submit" >Submit</button>
      </form>
      {isSubmit && <p>Full Name: {name} {lastName}</p>} 
    </div>
  );
}

export default App;
