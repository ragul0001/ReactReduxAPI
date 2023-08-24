import React, { useState } from 'react'
import { Key, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, fetchLabData,fetchLabDataByIds  } from './CreateSlice';
import { Link } from 'react-router-dom';


// Labname:'',name:'',role:'',city:'',reports:'',contact:'',email:''
interface SearchState {
  [x: string]: any;
  search: string;
}
function TableData() {
    const initialState={search:''}
    
    const dispatch=useDispatch<any>();
    const [IsOpen, setIsOpen] = useState(false);
    const [selectedLabData, setSelectedLabData] = useState<any>(null);
    const [search, setSearch] = useState<SearchState>(initialState);
    const [filteredData, setFilteredData] = useState<any[]>([]);

    const labdata=useSelector((state:any)=>state.LabDetails.emplist);

    useEffect(() => {
        // Fetch updated user data after each update
        // You can dispatch an action here to fetch the updated user data from an API if needed
        dispatch(fetchLabData()) 
      }, [dispatch]);

      
      
      if (!Array.isArray(labdata)) {
        return <div>Loading...</div>; // or display a loading indicator while the data is being fetched
    }
    const handleDelete=(id:number)=>{
      const shouldDelete = window.confirm("Are you sure you want to delete this?");
      if (shouldDelete) {
        dispatch(deleteData(id));
      }
    }   
    const openModal = (data: any) => {
      const selectedData = labdata.find((item: any) => item.id === data.id);
      setSelectedLabData(selectedData);
      setIsOpen(true);
    };
    const closeModal = () => {
      setSelectedLabData(null);
      setIsOpen(false);
    };
    const handleSubmit=(e:any)=>{
      e.preventDefault();
      // Perform search/filtering logic here using the "search" state
      // Example: You can filter the labdata array based on the LabName field
      const filteredData = labdata.filter((item: any) =>
        item.LabName.toLowerCase().includes(search.toLowerCase())
        
      );
      console.log(filteredData);
      
    }
    const handleChange=(e:any)=>{
          setSearch(e.target.value)      
    }
    if (labdata.length === 0) {
      return <div>Loading...</div>;
    }
  
  return (
    <>

    <div className="flex flex-col ">
   {/*  */}
    <form className="container flex mx-auto justify-end mt-2" onSubmit={handleSubmit}>
      <div className="flex border-2 rounded">
          <button className="flex items-center justify-center px-4 border-r bg-blue-600"  >
              <svg className="w-6 h-6 text-white " fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                  </path>
              </svg>
          </button>
          <input type="text" className="px-4 py-2 w-80" onChange={handleChange} name="search" placeholder="Search..."/>
      </div>
  </form>
{/*  */}
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8"> 
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead
            className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" className=" px-6 py-4">ID</th>
              <th scope="col" className=" px-6 py-4">LabName</th>
              <th scope="col" className=" px-6 py-4">Name</th>
              <th scope="col" className=" px-6 py-4">Role</th>
              <th scope="col" className=" px-6 py-4">City</th>
              <th scope="col" className=" px-6 py-4">Reports</th>
              <th scope="col" className=" px-6 py-4">Contact</th>
              <th scope="col" className=" px-6 py-4">Email</th>              
              <th scope="col" className=" px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {labdata.map(({id,LabName,Name,Role,City,Reports,Contact,Email}: any,i: Key | number | string)=>(
                 <tr className="border-b dark:border-neutral-500" key={i}>
                        <td  className="whitespace-nowrap  px-6 py-4 font-medium">{id}</td>
                        <td className="whitespace-nowrap  px-6 py-4">{LabName}</td>
                        <td className="whitespace-nowrap  px-6 py-4">{Name}</td>
                        <td className="whitespace-nowrap  px-6 py-4">{Role}</td>
                        <td className="whitespace-nowrap  px-6 py-4">{City}</td>
                        <td className="whitespace-nowrap  px-6 py-4">{Reports}</td>
                        <td className="whitespace-nowrap  px-6 py-4">{Contact}</td>
                        <td className="whitespace-nowrap  px-6 py-4">{Email}</td>
                        <td className="whitespace-nowrap  px-6 py-4">
                        <button
                        type="button"
                        onClick={() => openModal({ id, LabName, Name, Role, City, Reports, Contact, Email })}
                        className="inline-block rounded  px-3 pb-2 pt-2.5 mx-2 text-xs font-medium uppercase leading-normal text-white">
                         <svg className="h-6 w-6 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  <circle cx="12" cy="12" r="3" /></svg>
                        </button>
                        <Link to={`/edit/${id}`}>
                        <button
                        type="button"
                        className="inline-block rounded  px-3 pb-2 pt-2.5 mx-2 text-xs font-medium uppercase leading-normal text-white">
                          <svg className="h-6 w-6 text-yellow-500"   width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                        </button></Link>
                        <button
                        type="button"
                        onClick={()=>handleDelete(id)}
                        className="inline-block rounded  px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white ">
                        <svg className="h-6 w-6 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                        </button>
                       </td>
                       {/* Modal Read Only Display */}
                       <td>
                       {IsOpen && selectedLabData &&(
                          <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>

                            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                              <div className="modal-content py-4 text-left px-6">
                                <div className="flex justify-between items-center pb-3">
                                  <p className="text-2xl font-bold">Details:</p>
                                  <button onClick={closeModal} className="modal-close cursor-pointer z-50">
                                  <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                  </button>
                                </div>
                                <div className='mt-5 text-xl font-bold'>
                                      <p className=''>ID: {selectedLabData.id}</p>
                                      <p>Lab Name: {selectedLabData.LabName}</p>
                                      <p>Name: {selectedLabData.Name}</p>
                                      <p>Role: {selectedLabData.Role}</p>
                                      <p>City: {selectedLabData.City}</p>
                                      <p>Reports: {selectedLabData.Reports}</p>
                                      <p>Contact: {selectedLabData.Contact}</p>
                                      <p>Email: {selectedLabData.Email}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
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

export default TableData