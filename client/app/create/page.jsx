"use client"
import React from 'react'
import axios from 'axios';


const page = () => {
    let handlerSubmit =()=>{
        console.log("Hellow");
        axios.post('https://akashapi.vercel.app/create', 
            {
                "name":"Rimjimmmmmmm"
            }
        )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <div className='max-w-[1300px] mx-auto my-10'>
        <form action="" className='flex flex-col'>
            <input type="text" className='bg-red-200 my-2 py-1 px-3 text-black placeholder:text-black outline-none' placeholder='Name'/>
            <input type="text" className='bg-red-200 my-2 py-1 px-3 text-black placeholder:text-black outline-none' placeholder='Email'/>
            <input type="text" className='bg-red-200 my-2 py-1 px-3 text-black placeholder:text-black outline-none' placeholder='Image'/>
            <button type='button' onClick={handlerSubmit} className='py-3 px-4 bg-red-200'>Submit</button>
        </form>
    </div>
  )
}

export default page