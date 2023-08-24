import React, { useState } from 'react';
import image from '../Images/img.jpg'
import { createData } from './CreateSlice';
import { useDispatch,useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function Registration() {
  const initialState = { LabName: '', Name: '', Role: '', City: '', Reports: '', Contact: '', Email: '' };
    const [details,setDetails]=useState(initialState);
    const navigate=useNavigate();
    const dispatch=useDispatch<any>();
    const handleChange=(e: { target: { name: any; value: any; }; })=>{
         const {name,value}=e.target;
         setDetails({...details,[name]:value}) 
    }
    const handleSubmit = (e:any) => {
          e.preventDefault();
          dispatch(createData(details));
          alert('Successfully Submitted');
          navigate('/')
          setDetails(initialState);
    };

  return (
    <>
     <div className='bg-cover bg-no-repeat bg-center bg-fixed h-screen'   style={{backgroundImage:`url(${image})`}} >
        <div className='w-full h-full flex  justify-center items-center backdrop-blur-sm'>
             <div className='max-w-6xl container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-wrap bg-white rounded-lg '>
                  <div className='flex basis-1/3 bg-cover bg-no-repeat bg-center bg-fixed justify-center ' style={{backgroundImage:`url(${image})`}}>
                         <div className='grid grid-rows-3   '>
                           <div className='place-self-center'>
                              <div className='flex'>
                                <div className=' backdrop-brightness-150 rounded-md p-2 mx-4'>
                                 <svg className="h-8 w-8 text-white  "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="21" x2="21" y2="21" />  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />  <line x1="10" y1="9" x2="14" y2="9" />  <line x1="12" y1="7" x2="12" y2="11" /></svg>                       
                                </div>
                                <div className=''>
                                  <h1 className='text-white text-sm font-bold '>Eiusmod tempor</h1>
                                  <p className='text-xs text-white'> Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                                </div>
                              </div>
                          </div>
                            {/*  */}
                            <div className='place-self-center'>
                              <div className='flex'>
                                <div className=' backdrop-brightness-150 rounded-md p-2 mx-4'>
                                <svg className="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="9" y1="3" x2="15" y2="3" />  <line x1="10" y1="9" x2="14" y2="9" />  <path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6" /></svg>
                                </div>
                                <div className=''>
                                  <h1 className='text-white text-sm font-bold '>Eiusmod tempor</h1>
                                  <p className='text-xs text-white'> Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                                </div>
                              </div>
                          </div>
                          {/*  */}
                          <div className='place-self-center'>
                              <div className='flex'>
                                <div className=' backdrop-brightness-150 rounded-md p-2 mx-4'>
                                <svg className="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />  <line x1="8" y1="8" x2="12" y2="8" />  <line x1="8" y1="12" x2="12" y2="12" />  <line x1="8" y1="16" x2="12" y2="16" /></svg>
                                </div>
                                <div className=''>
                                  <h1 className='text-white text-sm font-bold '>Eiusmod tempor</h1>
                                  <p className='text-xs text-white'> Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                                </div>
                              </div>
                          </div>
                         </div>
                  </div>
                  <div className='flex basis-2/3 justify-center' > 
                        <div className='m-10'>
                              <div >
                                  <p className='text-2xl font-bold text-black'>Registered as</p>
                                  <p className='text-2xl -mt-1 font-bold text-blue-600'>Diagnostic Lab</p>
                              </div>
                              <form onSubmit={handleSubmit}>
                                <div className=''>
                                  <div className='mt-5'>
                                  <label className='text-black font-medium' htmlFor='Labname'>Lab name</label><br/>
                                  <input type='text' name='LabName' onChange={handleChange} className='border bg-sandals-600 w-full p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Your Labortary Name'/>
                                  </div>
                                  <div className='flex flex-wrap mt-3'>
                                    <div className=''>
                                    <label htmlFor='name' className='font-medium'>Your Name:</label><br />
                                    <input type="text" name='Name' onChange={handleChange} className='border bg-sandals-600 w-60 p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Your Name'/>                  
                                    </div>
                                    <div className=' mx-3'>
                                      <label htmlFor='role' className='font-medium'>Your Role:</label><br />
                                      <input type="text" name='Role' onChange={handleChange}  className='border bg-sandals-600 w-60 p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Your Role' />
                                    </div>
                                  </div>
                                  <div className='flex flex-wrap mt-3'>
                                    <div className=''>
                                    <label htmlFor='city' className='font-medium'>Your City:</label><br />
                                    <input type="text" name='City' onChange={handleChange} className='border bg-sandals-600 w-60 p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Your City' />                  
                                    </div>
                                    <div className=' mx-3'>
                                      <label htmlFor='reports' className='font-medium'>Daily Pathology Reports:</label><br />
                                      <input type="text" name='Reports' onChange={handleChange} className='border bg-sandals-600 w-60 p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Number of Reports'/>
                                    </div>
                                  </div>
                                  <div className='mt-5'>
                                  <label className='text-black font-medium' htmlFor='contact'>Mobile Number</label><br/>
                                  <input type='text' name="Contact" onChange={handleChange} className='border bg-sandals-600 w-full p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Enter Your Mobile Number'/>
                                  </div>
                                  <div className='mt-5'>
                                  <label className='text-black font-medium' htmlFor='email'>Email Address</label><br/>
                                  <input type='email' name='Email' onChange={handleChange} className='border bg-sandals-600 w-full p-1 mt-2 required rounded-md placeholder:text-sm' placeholder='Enter Your Email Address'/>
                                  </div>
                                 <div className='mt-4'>
                                        <input id="link-checkbox" type="checkbox" value="yes"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a> and <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Privacy Polcies of</a> evalio.</label>   
                                </div> 
                                <div className='mt-4'>
                                          <button className='border bg-blue-600 p-3 rounded-full w-40 text-white'>SignUp</button>                                
                                   </div>
                                </div>
                                
                              </form>
                             

                        </div>
                  </div>
                </div>
             </div>
       </div> 
    </div> 
    </>
  )
}

export default Registration;




