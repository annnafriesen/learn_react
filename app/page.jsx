"use client"

//add this!
import Form from '@/components/Form';
import Result from '@/components/Result.jsx';
import { useState } from 'react';

import { calculate } from "@/utility/helpers" // I added this function beforehand


export default function Home() {
  const [ score, setScore ] = useState(10);
  
  function calculateScore(name, major) {
    setScore(calculate(name, major));
  }

  return (
    <main style={{
      padding: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}>
      <img 
        src="/images/teddy.png" 
        alt="Insanely built teddy hauling an inordinately large domino (not the pizza)"
        style={{ width: 100 }} />
      <h1>Rizzulator</h1>
      <p>
        We're so glad you're here :)
      </p>

      {score == 0 && (
        <Form handleCalculate={calculateScore}/> //this will always be true
      )}
      {score != 00 && (
        <Result score={score}/>
      )}
      
    </main>
  )
}
