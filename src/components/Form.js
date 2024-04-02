import React from 'react'

export default function Form() {
  return (
    <div className='mt-10 shadow-lg bg-slate-300'>
        <h1 className='text-center py-4 text-2xl'>React Form</h1>
        <form className='px-28 pb-10'>
            <label htmlFor="name">Name: </label><br />
            <input type="text" id="name" name="name" required/><br />
            
            <label htmlFor="email">Email: </label><br />
            <input type="email" id="email" name="email"/><br />

            <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 m-5">Submit</button>
        </form>
    </div>
  )
}
