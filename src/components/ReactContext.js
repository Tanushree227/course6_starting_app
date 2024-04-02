import React from 'react'

export default function ReactContext() {
  return (
    <div className='shadow-lg bg-gray-400 my-10 text-white p-5'>
        <h1 className='text-3xl font-mono font-bold text-center'>React Context</h1>
        <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
        <br />
        <p>Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.</p>
        <br />
        <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.</p>
    </div>
  )
}
