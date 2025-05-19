import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiSearch, HiChatAlt2 } from 'react-icons/hi'; // React icons

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <HiMenu className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          > 
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/membership">Membership</Link></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-3xl">MuscleDistrict</Link>
      </div>

      <div className="navbar-end gap-2 items-center">

        {/* Notification Icon */}
         <Link to="/contact" className="btn btn-primary gap-2 px-4">
         <HiChatAlt2 className="w-5 h-5" /> Talk to Us
         </Link>

      </div>
    </div>
  );
}

export default Navbar;
