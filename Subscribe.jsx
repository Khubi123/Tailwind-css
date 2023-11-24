import React from 'react'
import Button from '../Section/Button'

function Subscribe() {
  return (
   <section className='max-container flex justify-center max-lg items-center max-lg:flex-col gap-10' id='contact us'>
    <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>Sign up for <span className='text-coral-red'>Updates</span> & Newletter</h3>
    <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full bg-white'>
      <input type="text" placeholder='Subscribe@nike.com' className='input bg-white' />
      <Button label="Sign up"/>
    </div>
   </section>
  )
}

export default Subscribe