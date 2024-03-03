import useCounter from '../hooks/use-counter';
import {useState, useEffect} from 'react'
import Button from '../components/Button';


export default function CounterPage({initialCount}) {
    const {count, increment} = useCounter(initialCount);
  return (
    <div>
       <div>CounterPage</div>
    <h1>Count is {count}</h1>
    <Button onClick={increment}>Increment</Button> 
    </div>
    
  )
}
