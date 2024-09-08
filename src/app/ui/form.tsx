import React from 'react'
import MainButton from './mainButton'

function Form() {
  return (
    <form className='flex flex-col w-full md:w-[45%] gap-6'>
        <div className='flex flex-col gap-0'>
        <label htmlFor="name">Name</label>
        <input className='h-12 text-black px-4' type="text" id="name" />
        </div>
        <div className='flex flex-col'>
        <label htmlFor="email">Email</label>
        <input className='h-12 text-black px-4' type="email" id="email" />
        </div>
        <div className='flex flex-col'>
        <label htmlFor="message">Message</label>
        <textarea className='min-h-[180px] text-black px-4 py-2' id="message" />
        </div>
        <MainButton className='w-full py-2'>Submit</MainButton>
    </form>
  )
}

export default Form