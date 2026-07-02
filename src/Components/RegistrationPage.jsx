import React from 'react'
import { useForm } from "react-hook-form"


const Registrationform = () => {
 const {  register, handleSubmit, watch,formState: { errors } } = useForm()

 function onSubmit(data){
    console.log("Registering the Form",data)
 }

  return (
    
    <div className='bg-gray-100  items-center justify-center min-h-screen  bg-cover bg-center h-screen
    bg-[url("https://imgs.search.brave.com/nDh6cNF9tT0RwShkiyW_u7PoujSgEmvI8uqmzCjFF7o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wODAv/NDc3LzY4Ni9zbWFs/bC92aW9sZXQtZ3J1/bmdlLWhpLXRlY2gt/YW5kLXNjaWVuY2Ut/bW90aW9uLWJhY2tn/cm91bmQtd2l0aC1o/dWQtZ2VhcnMtZGVz/aWduLXZpZGVvLmpw/Zw")]   '>
           
       
        <div className='bg-transparent shadow-xl rounded-2xl p-8 w-full'>
            <h2 className='text-2xl  font-bold text-center text-gray-800 mb-6 '>FACE RECOGNITION SYSTEM </h2>
         </div> 


        <form className='space-y-5 '>    
      <div className='justify-between rounded-3xl shadow-2xl p-4 bg-transparent'>
        <div className='flex justify-center items-center '>
        <label className='flex align-item-center justify-center p-4 px-2 py-3 text-black font-medium mb-2'>Full Name</label>
        <input className=' flex align-item-center justify-center p-4 px4 py-3  border rounded focus:ring-2 focus:ring-yellow-500 focus:outline-none' 
        type='text' 
        id='name' 
        name='name'
        {...register('name')}
         placeholder='Enter Name' />

      </div>
      <div className='flex justify-center items-center '>          
        <label className='flex align-item-center justify-center p-4 text-black font-medium mb-2'>Mobile</label>
        <input className='flex align-item-center justify-center p-4 border rounded focus:ring-2 focus:ring-yellow-500 focus:outline-none' 
        type="tel"
        id='Mobile'
        name='Mobile'
        {...register('mobile')}
        placeholder='Enter Mobile no.' />

      </div>
      <div className='flex justify-center items-center '>     
        <label className='flex align-item-center justify-center p-4 text-black font-medium mb-2'>Email ID</label>
        <input className='flex align-item-center justify-center p-4  border rounded focus:ring-2 focus:ring-yellow-500 focus:outline-none' 
        type="text" 
        id='email' 
        name='email' 
        {...register('email')}
        placeholder='Enetr Email ID'/>

      </div>
      <div className='flex justify-center items-center p-4 gap-6'>
        <button className='bg-amber-300 text-black rounded  cursor-pointer active:scale-95 px-4 py-2 font-semibold ' onSubmit={handleSubmit(onSubmit)}>
            
            Register 
            </button>
        <button className='bg-amber-300 text-black rounded  cursor-pointer active:scale-95 px-4 py-2 font-semibold '>
            Unlock  
            </button>
      </div>
      </div>
      </form>
    </div>
    
  )
}

export default Registrationform