import React, { useState } from 'react'

export default function Week2() {
    const [stateHook, setStateHook] = useState(null);
  return (
    <div className='my-10 shadow-lg p-5 bg-gray-400'>
        <h1 className='text-3xl font-bold text-pretty text-center'>Week 2: Getting Started with Hook</h1>
        <div className='p-10'>
            <p className='text-center text-3xl'>useState Hook</p>
            <p>In React, useState is a special function that lets you add state to functional components. It provides a way to declare and manage state variables directly within a function component. It should be noted that one use of useState() can only be used to declare one state variable. It was introduced in version 16.8.</p>
        </div>
        <p>{stateHook}</p>
    </div>
  )
}
