import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAdded } from './UserSlice';

function AddUser() {
    const navigate=useNavigate();
    const dispatch=useDispatch();

    //  const initialState={name:'',city:'',email:''}
    //  const [data,setData]=useState(initialState);
     const [error,setError]=useState (null);
     const [name,setName]=useState ("");
     const [city,setCity]=useState ("");
     const [email,setEmail]=useState (""); 
   

    //  const handleChange=(e: { target: { name: any; value: any; }; })=>{
    //      const {name,value}=e.target;
    //      setData({...data,[e.target.name]:e.target.value});
    //  }
     //state management
     const add=useSelector((state:any)=>state.users);

     const handleSubmit=(e: React.FormEvent)=>{
          e.preventDefault();
          dispatch(userAdded({Id:add[add.length-1].Id+1,name,city,email}));
          navigate("/");
     }

  return (
    <>                      
       <div className='flex justify-center'>
                <div className='mt-9'>
                        <div>
                            <h1 className='font-bold text-2xl text-blue-400'>Details</h1>
                <form autoComplete='on' className='mt-9' onSubmit={handleSubmit} >
                    <div className='flex flex-wrap'>
                      <div className=''>
                        <label htmlFor='name' className='font-bold'>Name:</label><br />
                        <input type="text" name='name'  onChange={(e)=>setName(e.target.value)}  className='border border-black w-60 p-1 mt-2 rounded-md' />
                      </div>
                      <div className='mx-3'>
                        <label htmlFor='city' className='font-bold'>City:</label><br />
                        <input type="text" name='city'  onChange={(e)=>setCity(e.target.value)} className='border border-black w-60 p-1 mt-2 rounded-md' />
                      </div>
                    </div>
                    <div className='mt-4 '>
                      <label htmlFor='email' className='font-bold'>Email:</label><br />
                      <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)}  className='border-b-2 border-black outline-none  w-11/12 p-1 mt-2 ' />                    
                    </div>                  
                    <div className='text-center mt-6'>
                       {error && <p className="text-red-500">{error}</p>}
                      <button className='border p-2 bg-violet-800 text-white  w-11/12 text-center rounded-full'  >Submit</button>
                    </div>
                  </form>
                        </div>
                </div>
       </div>
    </>
  )
}

export default AddUser