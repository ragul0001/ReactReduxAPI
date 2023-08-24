import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <>
      <div>
        <nav className="bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4 ">
            
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <NavLink to="/Add"><a
                  href=""
                  className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                >
                  + AddUser
                </a></NavLink>
                
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
