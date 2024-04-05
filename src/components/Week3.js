import React from 'react'

export default function Week3() {
  return (
    <div className='mb-10 shadow-lg p-5 bg-slate-200'>
        <h1 className='text-3xl font-medium text-pretty text-center'>Week 3: JSX and Testing</h1>
        <div>
            <h3 className='text-lg font-medium'>JSX, Components and Elements</h3>
            <p><strong>JSX: </strong> it is a syntax extension to JavaScript.JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.</p>
            <p><strong>Components: </strong>Components are like functions that return HTML elements. Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
            <p><strong>Elements: </strong>It is the basic building block in a react application, it is an object representation of a virtual DOM node. React Element contains both type and property. It may contain other Elements in its props. React Element does not have any methods, making it light and faster to render than components.</p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Testing</h3>
        </div>
    </div>
  )
}