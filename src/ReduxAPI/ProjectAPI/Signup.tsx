import React, { useState } from 'react';
import image from '../Images/img.jpg'
import { createData } from './CreateSlice';
import { useDispatch,useSelector  } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


function Signup() {
     const initialState={Email:'',pwd:''}
     const [form,setForm]=useState(initialState);
     const navigate=useNavigate();
     const handleChange=(e:any)=>{
           const {name,value}=e.target;
           setForm({...form,[name]:value});
  
     }   
     const handleSubmit=(e:any)=>{
           const email=form.Email;
          e.preventDefault();
          if(form.Email==='test@gmail.com' && form.pwd=='test'){
              alert("Logined Successfully");
              navigate('/');
          }
          else{
            alert("Invalid Details")
          }
     }

  return (
    <>
     <div className='bg-cover bg-no-repeat bg-center bg-fixed h-screen'   style={{backgroundImage:`url(${image})`}} >
        <div className='w-full h-full flex  justify-center items-center backdrop-blur-sm'>
             <div className='max-w-6xl container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <div className='flex basis-1/2 justify-center ' > 
                        <div  className=' bg-white rounded-lg '>
                              <div className='m-10'>
                                  <p className='text-2xl font-bold text-black'>SignUp</p>
                                  <p className='text-2xl -mt-1 font-bold text-blue-600'>Diagnostic Lab</p>
                              </div>
                              <form onSubmit={handleSubmit} >
                                <div className='m-10'>                                 
                                  <div className='mt-5'>
                                  <label className='text-black font-medium' htmlFor='Email'>Email Address</label><br/>
                                  <input type='email' name='Email' onChange={handleChange} className='border bg-sandals-600 w-96 p-1 mt-2 required rounded-md placeholder:text-sm' placeholder='Enter Your Email Address'/>
                                  </div>
                                  <div className='mt-5'>
                                  <label className='text-black font-medium' htmlFor='pwd'>Password:</label><br/>
                                  <input type='text' name='pwd' onChange={handleChange} className='border bg-sandals-600 w-96 p-1 mt-2 required rounded-md placeholder:text-sm' placeholder='Enter your Password'/>
                                  </div>
                                
                                <div className='mt-4 '>
                                          <button className='border bg-blue-600 p-3 rounded-full w-96 text-white'>Login</button>                                
                                   </div>
                                   <div className='flex justify-center mt-3'>
                                       <p>Don't have an account?<span className='text-blue-600'><Link to={'/new'}>Sign Up</Link></span></p>
                                  </div>
                                </div>
                                  
                              </form>
                             

                        </div>
                  </div>
                </div>
             </div>
       </div> 
    </>
  )
}

export default Signup