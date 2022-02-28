import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [count, setCount] = useState(0);

  const incAPI = async (response)  =>{
    let result = await axios.post('http://localhost:8080/api/inc', {})
    setCount(result.data.number)
  }
  
  const refAPI = async (response)  =>{
    let result = await axios.post('http://localhost:8080/api/ref', {})
    // console.log(result.data)
    setCount(result.data.number)
  }
  
  return (
    <div>
      <div>
        Server Number : 
        <input type='text'  value={count}></input>
      </div>
      <button onClick={incAPI}> Increase </button>
      <button onClick={refAPI}> Refresh </button>
    </div>
  );
}

export default App;
