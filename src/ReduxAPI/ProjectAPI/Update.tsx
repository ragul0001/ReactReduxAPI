import React, { useEffect, useState } from 'react'
import image from '../Images/img.jpg'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { updateData } from './CreateSlice';
function Update() {
   const { id } = useParams();
   const navigate=useNavigate();
   const dispatch=useDispatch<any>();


   const user=useSelector((state:any)=>
       state.LabDetails.emplist.find((user:any)=>user.id===parseInt(id||'')) 
   );
   const [ formData, setupdateData] = useState({   
    LabName: '',
    Name: '',
    Role: '',
    City: '',
    Reports: '',
    Contact: '',
    Email: '',
  });    

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setupdateData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(updateData(id, formData));   
    navigate('/'); // Redirect to home page after update
    window.location.reload();
  };
  useEffect(() => {
    if (user) {
      setupdateData({
        LabName: user.LabName,
        Name: user.Name,
        Role: user.Role,
        City: user.City,
        Reports: user.Reports,
        Contact: user.Contact,
        Email: user.Email,
      });
    }
  }, [user]);

  return (
    <>
     <div className='bg-cover bg-no-repeat bg-center bg-fixed h-screen'   style={{backgroundImage:`url(${image})`}} >
        <div className='w-full h-full flex  justify-center items-center backdrop-blur-sm'>
             <div className='max-w-6xl container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-wrap bg-white rounded-lg '>
                  <div className='flex basis-1/3'>
                         <img src={image} className='w-fit' alt='style-image'/>
                  </div>
                  <div className='flex basis-2/3 justify-center' > 
                        <div className='m-10'>
                              <div >
                                  <p className='text-2xl font-bold text-black'>Update Details</p>
                                  <p className='text-2xl -mt-1 font-bold text-blue-600'>Diagnostic Lab</p>
                              </div>
                              <form onSubmit={handleSubmit} >
                                <div className=''>
                                  <div className='mt-5'>
                                  <label className='text-black font-medium' htmlFor='Labname'>Lab name</label><br/>
                                  <input type='text' name='LabName' value={formData.LabName} onChange={handleChange} className='border bg-sandals-600 w-full p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Your Labortary Name'/>
                                  </div>
                                  <div className='flex flex-wrap mt-3'>
                                    <div className=''>
                                    <label htmlFor='name' className='font-medium'>Your Name:</label><br />
                                    <input type="text" name='Name' value={formData.Name} onChange={handleChange}   className='border bg-sandals-600 w-60 p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Your Name'/>                  
                                    </div>
                                    <div className=' mx-3'>
                                      <label htmlFor='role' className='font-medium'>Your Role:</label><br />
                                      <input type="text" name='Role' value={formData.Role}  onChange={handleChange}  className='border bg-sandals-600 w-60 p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Your Role' />
                                    </div>
                                  </div>
                                  <div className='flex flex-wrap mt-3'>
                                    <div className=''>
                                    <label htmlFor='city' className='font-medium'>Your City:</label><br />
                                    <input type="text" name='City' value={formData.City} onChange={handleChange}   className='border bg-sandals-600 w-60 p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Your City' />                  
                                    </div>
                                    <div className=' mx-3'>
                                      <label htmlFor='reports' className='font-medium'>Daily Pathology Reports:</label><br />
                                      <input type="text" name='Reports' value={formData.Reports} onChange={handleChange}  className='border bg-sandals-600 w-60 p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Number of Reports'/>
                                    </div>
                                  </div>
                                  <div className='mt-5'>
                                  <label className='text-black font-medium' htmlFor='contact'>Mobile Number</label><br/>
                                  <input type='text' name="Contact" value={formData.Contact} onChange={handleChange}  className='border bg-sandals-600 w-full p-1 mt-2 rounded-md placeholder:text-sm' placeholder='Enter Your Mobile Number'/>
                                  </div>
                                  <div className='mt-5'>
                                  <label className='text-black font-medium' htmlFor='email'>Email Address</label><br/>
                                  <input type='email' name='Email' value={formData.Email} onChange={handleChange}  className='border bg-sandals-600 w-full p-1 mt-2 required rounded-md placeholder:text-sm' placeholder='Enter Your Email Address'/>
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

export default Update

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
