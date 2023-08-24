import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser  from "./AddUser";
import Navigation from "./Navigation";
import UserLists from "./UserLists";
import UpdateUser from "./UpdateUser";

import React from 'react'

function MainNav() {
  return (
    <>
   
    <Router> 
    <Navigation/>   
          <Routes>                               
               <Route  path='/Add' element={<AddUser/>}></Route>
               <Route  path='/' element={<UserLists/>}></Route>
               {/* <Route  path='/edit/:id' element={<Updates/>}></Route> */}
               <Route path='/edit/:id' element={<UpdateUser/>}></Route>
          </Routes>
    </Router>
    </>
  )
}

export default MainNav