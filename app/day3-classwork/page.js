'use client';
import {useState} from 'react';

import React from 'react'
export default function page() {
const [name , setName] = useState("")
const [count,setCount] = useState(0);
const [color,setColor] = useState("red");
const changeColor = () => {
    if (color === "red") {
      setColor("yellow");
    } else {
      setColor("red");
    }
  };
  const [age,setAge] = useState("");
  const checkAge = () => {
    if (age>=18){
      setAge("Adult");
    } else {
      setAge("Minor");
    }
  };
  const [switchState,setSwitchState] = useState("ON");
  const changeSwitch = () => {
    if (switchState === "ON") {
      setSwitchState("OFF");
    } else {
      setSwitchState("ON");
    }
  };

const [count1, setCount1] = useState(0);

  const increment = () => setCount1(count1 + 1);
  const decrement = () => {
    if (count1 > 0) setCount1(count1 - 1);
  };
  const reset = () => setCount1(0);
  
return (
   <div style={{ padding: "20px",backgroundColor: color }}>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <h2>Hello, {name}</h2>
      <button onClick={changeColor}>
        Change Background Color
      </button>
      <p><button onClick={() => setCount(count + 1)}>
        ❤️ {count} 
      </button></p>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={checkAge}>
        Check Age
      </button>
      <h3>{age}</h3>
      <button onClick={changeSwitch}>
        Change Switch State
      </button>
      <h3>Switch is {switchState}</h3>
      <h2>Count: {count1}</h2>
      <p><button onClick={increment}>+</button></p>
      <p><button onClick={decrement}>-</button></p>
      <p><button onClick={reset}>Reset</button></p>
      
    </div>
)
}