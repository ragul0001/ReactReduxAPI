import { configureStore } from "@reduxjs/toolkit";
//Sample CRUD
// import userReducer from '../Features/Users/UserSlice';
//API Connect 
import apiConnect from '../ReduxAPI/ProjectAPI/CreateSlice';

export const Store=configureStore({
    reducer:{
        //sample CRUD
        //  users:userReducer,
         LabDetails:apiConnect,
    }
    
})