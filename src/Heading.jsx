import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from './ShortButton'

function Navbar() {
  return (

    <nav className="bg-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src="./logo.png" alt="Logo" className="h-12" />
        </div>
        <div className="block md:hidden">
          <button className="text-2xl">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <span className="hidden md:block">
        <ul className="flex space-x-6 text-lg font-bold ">
          <li><a href="#home" className="hover:text-purple-600">Home</a></li>
          <li><a href="#about" className="hover:text-purple-600">About us</a></li>
          <li><a href="#publications" className="hover:text-purple-600">Publications</a></li>
          <li><a href="#collaborate" className="hover:text-purple-600">Collaborate</a></li>
          <li><a href="#blog" className="hover:text-purple-600">Blog</a></li>
          <li><a href="#profile" className="hover:text-purple-600">Profile</a></li>
        </ul>
        </span>
        <div className="font-bold">
          <Button name="Login"/>
        </div>
      </div>
    </nav>
  
  );
}

export default Navbar;
