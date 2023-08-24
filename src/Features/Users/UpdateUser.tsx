import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { userUpdated } from './UserSlice';
import { useParams } from 'react-router-dom';

function UpdateUser() {

const dispatch=useDispatch();
const navigate=useNavigate();
const { id } = useParams();

const user = useSelector((state:any) =>
  state.users.find((user: any) => user.Id===parseInt(id || ''))
);
const [name, setName] = useState(user.name );
const [city, setCity] = useState(user.city );
const [email, setEmail] = useState(user.email );


const handleUpdate=(e: React.FormEvent)=>{
  e.preventDefault();
            dispatch(
              userUpdated({
                 id:user.Id,
                 name,
                 city,
                 email
              }));
            navigate('/')
            
        }

  return (
    <>
        <div className='flex justify-center'>
                <div className='mt-9'>
                        <div>
                            <h1 className='font-bold text-2xl text-blue-400'>Update</h1>
                <form autoComplete='on' className='mt-9' onSubmit={handleUpdate} >
                    <div className='flex flex-wrap'>
                      <div className=''>
                        <label htmlFor='name' className='font-bold'>Name:</label><br />
                        <input type="text" name='name' value={name}    onChange={(e) => setName(e.target.value)} className='border border-black w-60 p-1 mt-2 rounded-md' />
                      </div>
                      <div className='mx-3'>
                        <label htmlFor='city' className='font-bold'>City:</label><br />
                        <input type="text" name='city' value={city}  onChange={(e) => setCity(e.target.value)}   className='border border-black w-60 p-1 mt-2 rounded-md' />
                      </div>
                    </div>
                    <div className='mt-4 '>
                      <label htmlFor='email' className='font-bold'>Email:</label><br />
                      <input type="email" name='email' value={email}  onChange={(e) => setEmail(e.target.value)} className='border-b-2 border-black outline-none  w-11/12 p-1 mt-2 ' />                    
                    </div>                  
                    <div className='text-center mt-6'>
                      <button type='submit' className='border p-2 bg-violet-800 text-white  w-11/12 text-center rounded-full'  >Submit</button>
                    </div>
                  </form>
                        </div>
                </div>
       </div>
    </>
  )
}

export default UpdateUser