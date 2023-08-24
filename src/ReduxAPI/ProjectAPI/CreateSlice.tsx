import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";




      const url="http://localhost:8000/getdata" ;   
      const initialState={
            emplist:[],
            message:''
      }      
      const apiConnect=createSlice({
            name: 'LabDetails',
            initialState,
            reducers: {
                  //ADD              
                  addLabDetails:(state:any,action)=>{
                          state.push(action.payload);                           
                  } ,    
                  setLabDetails:(state:any,action)=>{
                        console.log(action.payload)
                        state.emplist = action.payload                          
                } , 
                  setDeleteDetails:(state:any,action)=>{
                        state.emplist = state.emplist.filter((data: { id: any; }) => data.id !== action.payload);                          
                } , 
                setUpdateDetails: (state:any, action) => {
                  const updatedIndex = state.emplist.findIndex(
                    (data: { id: any; }) => data.id === action.payload.id
                  );
                  if (updatedIndex !== -1) {
                    state.emplist[updatedIndex] = action.payload.updatedData;
                  }
                },
                fetchLabDataByIds: (state, action) => {
                  const labData = state.emplist.find(
                    (data: { id: any }) => data.id === action.payload
                  );
                  if (labData) {
                    state.emplist = [labData]; // Assign the retrieved data to the state
                  } else {
                    state.emplist = []; // No data found, clear the state
                  }
                },
                //login
                addLogin:(state:any,action)=>{
                   state=(action.payload);  
                },
                setMessage: (state, action) => {
                  state.message = action.payload;
                },
            },
             
      })
      export const createData =  (details: any) => async (dispatch: any) => {
            try {
                const response= await axios.post(url,details);         
                dispatch( addLabDetails(response.data[0]));
            } catch (error) {
                console.log(error)
            }
        };
        export const fetchLabData = () => async (dispatch: any) => {
            try {
              const response = await axios.get("http://localhost:8000/showData");
              console.log("fetchLabData : "+response) // Fetch data from the server
              dispatch(setLabDetails(response.data)); // Dispatch the retrieved data to the reducer
            } catch (error) {
              console.log(error);
            }
          };
       export const updateData=(id: any, formData: any)=>async(dispatch:any)=>{
            try {
                  await axios.put(`http://localhost:8000/update/${id}`, formData);
                  dispatch(setUpdateDetails({ id, formData }));
                } catch (error) {
                  console.log(error);
                }
       }

      export const deleteData=(id:number)=> async (dispatch:any)=>{
              try{
                  const getId=id
                  console.log("getId : "+getId)
                  const responce=await axios.delete(`http://localhost:8000/delete/${getId}`);
                  console.log(responce) 
                  dispatch(setDeleteDetails(id))
              }
              catch (error) {
                  console.log(error);
                }
      }

      export const fetchLabDataById = (id: any) => async (dispatch: any) => {
            try {
              const response = await axios.get(`http://localhost:8000/showData/${id}`);
              dispatch(fetchLabDataById(response.data.id));
            } catch (error) {
              console.log(error);
            }
          };
        //SIGN IN
      export const signIn =(sign:any)=>async(dispatch:any)=>{
        try{
           const responce=await axios.post("http://localhost:8000/api/logindata",sign);
            if(responce.data.message ==="true"){
               alert("data existed");
               console.log("Data existed try New")
            }else{
              dispatch(addLogin(responce.data[0])); 
                alert("Data Submitted Successfully");
            }
         
        }
        catch (error) {
          console.log(error)
      }
      }
     
export const {addLabDetails,setLabDetails,setDeleteDetails,setUpdateDetails,fetchLabDataByIds,addLogin,setMessage}=apiConnect.actions;
export default apiConnect.reducer;


function dataAlreadyExists(): any {
  throw new Error("Function not implemented.");
}

