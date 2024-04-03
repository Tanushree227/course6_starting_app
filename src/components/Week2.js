import React from 'react'

export default function Week2() {
  return (
    <div className='my-10 shadow-lg p-5 bg-gray-400'>
        <h1 className='text-3xl font-bold text-pretty text-center'>Week 2: Getting Started with Hook</h1>
        <div className='px-10'>
            <p className='text-center text-3xl'>useState Hook</p>
            <p>In React, useState is a special function that lets you add state to functional components. It provides a way to declare and manage state variables directly within a function component. It should be noted that one use of useState() can only be used to declare one state variable. It was introduced in version 16.8.</p>
            <div>
              <ul className='list-item'>
                <p className='font-bold'>Internal working of useState hook:</p>
                <li className='list-item'>creates a new cell in the functional component’s memory object.</li>
                <li>New state values are stored in this cell during renders.</li>
                <li>The stack pointer points to the latest cell after each render.</li>
                <li>Deliberate user refresh triggers stack dump and fresh allocation.</li>
                <li>The memory cell preserves state between renders, ensuring persistence.</li>
              </ul>
            </div>
        </div>

        <div className='px-10'>
            <p className='text-center text-3xl'>useEffect Hook</p>
            <p>The useEffect in ReactJS is used to handle the side effects such as fetching data and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering</p>
            <h3 className='font-semibold text-xl'>How does it work?</h3>
            <p>You call useEffect with a callback function that contains the side effect logic.</p>
            <p>By default, this function runs after every render of the component.</p>
            <p>You can optionally provide a dependency array as the second argument.</p>
            <p>The effect will only run again if any of the values in the dependency array change.</p>
        </div>
    </div>
  )
}
