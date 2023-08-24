import { Key, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { userDeleted } from "./UserSlice"
function UserLists() {
    const view=useSelector((state:any)=>state.users)
    const dispatch=useDispatch();
    const handleDelete=(Id: any)=>{
         dispatch(userDeleted({id:Id}))
    }

  useEffect(() => {
    // Fetch updated user data after each update
    // You can dispatch an action here to fetch the updated user data from an API if needed
  }, []);
  return (
    <>
<div className="flex flex-col ">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8"> 
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead
            className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" className=" px-6 py-4">ID</th>
              <th scope="col" className=" px-6 py-4">Name</th>
              <th scope="col" className=" px-6 py-4">City</th>
              <th scope="col" className=" px-6 py-4">Email</th>            
              <th scope="col" className=" px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {view.map(({Id,name,email,city}: any,i: Key | number | string)=>(
                 <tr className="border-b dark:border-neutral-500" key={i}>
                        <td  className="whitespace-nowrap  px-6 py-4 font-medium">{Id}</td>
                        <td className="whitespace-nowrap  px-6 py-4">{name}</td>                        
                        <td className="whitespace-nowrap  px-6 py-4">{city}</td>
                        <td className="whitespace-nowrap  px-6 py-4">{email}</td> 
                        <td className="whitespace-nowrap  px-6 py-4">
                        <Link to={`/edit/${Id}`}>
                        <button
                        type="button"
                        className="inline-block rounded bg-green-600 px-6 pb-2 pt-2.5 mx-2 text-xs font-medium uppercase leading-normal text-white">
                        Edit
                        </button></Link>
                        <button
                        onClick={()=>handleDelete(Id)}
                        type="button"
                        className="inline-block rounded bg-red-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
                        Delete
                        </button>
                       </td>
                 </tr>  
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default UserLists