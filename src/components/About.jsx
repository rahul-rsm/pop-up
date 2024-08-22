import React, {useState} from 'react'
import Model from './model'

export const About = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
 <>
    <div>
        <h2 className="font-bold text-2xl">You want to know about me</h2>
    </div>
    <button onClick={()=> setIsOpen(true)}>Open PopUp</button>
    <Model isOpen= {isOpen} setIsOpen={setIsOpen} header={<p className='text-red-500 font-bold text-2xl'>hii</p>} footer={<div className='flex justify-end'><button onClick={() => setIsOpen(false)} className='bg-slate-300 font-bold px-4 py-2 rounded'>ok</button></div>}><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quo distinctio repudiandae impedit nemo quae.</p></Model>
    
 </>
  )
}
