import React from 'react'
import Nav from '../component/GeneralComponents/Nav'

const Signup = () => {
    
  return (
    <div>
        <Nav />
        <img src='/jobify.jpg' class='bg-purple-950 ml-20 mt-10 h-10' />
        <div className="flex m-20 bg-white">
            
            <form className='w-full bg-white text-sm py-3'>
                <div className="grid grid-cols-2 gap-4 mb-4 ">
                    <input type="text"
                    className='shadow-md rounded-sm border border-purple-900 px-3 py-2'
                    placeholder='First Name'
                     />
                    <input type="text"
                    placeholder='Last Name'
                    className='shadow-md rounded-sm border border-purple-900 px-3 ' />
                </div>
                    
            
                <input type="phone" 
                className='w-full grid input-field mb-4 shadow-md rounded-sm border border-purple-900 px-3 py-2'
                placeholder='Phone number'/>
                <input type="email" 
                className=' w-full input-field mb-4 shadow-md rounded-sm border border-purple-900 px-3 py-2'
                placeholder='Email address'/>
            
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <input type="text"
                    placeholder='Country'
                    className='shadow-md rounded-sm border border-purple-900 px-3 py-2' />
                    <input type="text"
                    placeholder='State'
                    className='shadow-md rounded-sm border border-purple-900 px-3' />
                </div>
            
                <input type="password" 
                    className=' w-full input-field mb-2 shadow-md rounded-sm border border-purple-900 px-3 py-2'
                    placeholder='Password'/>
                    <p className="text-xs text-gray-500 mb-4">Please be informed that your password should entail uppercase letters, lowercase letters, numbers, and symbols</p>
                    <input type="password" 
                    className='w-full input-field mb-4 shadow-md rounded-sm border border-purple-900 px-3 py-2'
                    placeholder='Confirm password'/>
                <button className="p-4 bg-purple-950 text-white py-2 rounded-sm hover:bg-purple-800 transition duration-300">Submit</button>
            </form>
        </div>   

    </div>
   
  )
}

export default Signup