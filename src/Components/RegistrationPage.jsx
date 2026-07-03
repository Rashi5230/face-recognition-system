import React, { useState } from 'react'
import CameraCapture from './CameraCapture'


const Registrationform = () => {
  const [name , setName] = useState("");
  const [mobile , setMobile] = useState("");
  const [email , setEmail] = useState("");

  const [showCamera , setShowCamera ] = useState(false);
  const [ capturedImage, setCapturedImage ] = useState('')

  const handleInputChange = (e) =>{
   const {name , value} =e.target;
   if (name === "name"){
    setName(value);
   }else if (name === "mobile"){
    setMobile(value);
   }else if (name === "email" ){
    setEmail(value);
   }
  };

  const handleCapture =(image) =>{
    setCapturedImage(image);
    setShowCamera(false);
  }


  const handleFormSubmit =(event) =>{
    event.preventDefault()
    const formData = {
      name,
      mobile,
      email,
    }
    console.log(formData)
    setShowCamera(true)
  }
   

  return (
    
    <div className='bg-gray-100  items-center justify-center min-h-screen  bg-cover bg-center h-screen
    bg-[url("https://imgs.search.brave.com/nDh6cNF9tT0RwShkiyW_u7PoujSgEmvI8uqmzCjFF7o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wODAv/NDc3LzY4Ni9zbWFs/bC92aW9sZXQtZ3J1/bmdlLWhpLXRlY2gt/YW5kLXNjaWVuY2Ut/bW90aW9uLWJhY2tn/cm91bmQtd2l0aC1o/dWQtZ2VhcnMtZGVz/aWduLXZpZGVvLmpw/Zw")]   '>
           
       
        <div className='bg-transparent shadow-xl rounded-2xl p-20 w-full'>
            <h2 className='text-5xl  font-bold text-center text-gray-800 mb-6 '>FACE RECOGNITION SYSTEM </h2>
         </div> 


        <form  
        onSubmit ={handleFormSubmit}
         className='space-y-20' >    
      <div className='justify-between rounded-3xl shadow-2xl p-20 bg-transparent'>
        <div className='flex justify-center items-center '>
        <label className='flex align-item-center justify-center p-4 px-2 py-3 text-black font-medium mb-2'>Full Name</label>
        <input className=' flex align-item-center justify-center p-4 px4 py-3  border rounded focus:ring-2 focus:ring-yellow-500 focus:outline-none' 
        type='text' 
        id='name' 
        name='name'
        value={name}
        onChange={handleInputChange}
         placeholder='Enter Name' />

      </div>
      <div className='flex justify-center items-center '>          
        <label className='flex align-item-center justify-center p-4 text-black font-medium mb-2'>Mobile</label>
        <input className='flex align-item-center justify-center p-4 border rounded focus:ring-2 focus:ring-yellow-500 focus:outline-none' 
        type="tel"
        id='mobile'
        name='mobile'
        value={mobile}
        onChange={handleInputChange}
        placeholder='Enter Mobile no.' />

      </div>
      <div className='flex justify-center items-center '>     
        <label className='flex align-item-center justify-center p-4 text-black font-medium mb-2'>Email ID</label>
        <input className='flex align-item-center justify-center p-4  border rounded focus:ring-2 focus:ring-yellow-500 focus:outline-none' 
        type="text" 
        id='email' 
        name='email'
        value={email} 
        onChange={handleInputChange}
        placeholder='Enetr Email ID'/>
        </div>
      <div className='flex justify-center items-center p-4 gap-6'>
     
        <button type='button'
        onClick={()=> setShowCamera(true)}
        className=' bg-amber-300 text-black rounded  w-60 cursor-pointer active:scale-95 px-10 py-3 font-semibold align-center '>
          Capture
          </button>
      </div>


    
      <div className='flex justify-center items-center p-4 gap-6'>

        <button  type='submit'
        className='bg-amber-300 text-black rounded  cursor-pointer active:scale-95 px-8 py-2 font-semibold '>
        Register 
            </button>

        <button type='button'
        className='bg-amber-300 text-black rounded  cursor-pointer active:scale-95 px-8 py-2 font-semibold '>
            Unlock  
            </button>
      </div>
      </div>
      </form>

      {showCamera && (
        <CameraCapture onCapture={handleCapture} />
)}

{capturedImage && (
  <div className="flex justify-center mt-6">
    <img
      src={capturedImage}
      alt="Captured Face"
      className="w-64 rounded-lg shadow-lg"
    />
  </div>
)}
    </div>
    
  )
}

export default Registrationform