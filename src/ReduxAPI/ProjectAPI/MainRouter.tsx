import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser  from "./Registration";
import Navigation from "./Navs";
import UserLists from "./TableData";
import Updates from './Update';
import Signup  from "./Signup";
import NewSign from "./NewSign";

import React from 'react'

function MainRouter() {
  return (
    <>
   
    <Router> 
    <Navigation/>   
          <Routes>                               
               <Route  path='/Add' element={<AddUser/>}></Route>
               <Route  path='/' element={<UserLists/>}></Route>
               <Route  path='/edit/:id' element={<Updates/>}></Route>
               <Route  path='/login' element={<Signup/>}></Route>
               <Route  path='/new' element={<NewSign/>}></Route>
          </Routes>
    </Router>
    </>
  )
}

export default MainRouter