import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import Button from './LongButton'

function Research() {
  return (
      <>
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
      
      <div className="md:w-0.4 w-full mx-5">
        <img src="graduates.jpg" alt="Graduates" className="w-full rounded-lg shadow-lg" />
      </div>

      <div className="md:w-0.4 w-full mt-8 md:mt-0 md:ml-12">
        <h3 className="text-xl font-bold">New Research opportunities</h3>
        <p className="mt-2 text-gray-600">
          Gain access to over 160 million call for papers and stay updated with what is happening in your field.
        </p>

        <div className="mt-4 flex space-x-2.5">
          
          <div className="flex items-center border border-black rounded-lg px-4 py-2 w-full md:w-1/2">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Search" className="focus:outline-none w-full text-sm text-gray-600" />
          </div>

          
          <button className="flex items-center border border-black rounded-lg px-4 py-2">
            <span className="text-sm font-medium">FILTERS</span>
            <FontAwesomeIcon icon={faFilter} className="ml-2 text-gray-600" />
          </button>
        </div>
      </div>
    </div>

     <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-8">
      
     

      <div className="md:w-0.4 w-full mt-8 md:mt-0 md:ml-12 md:pr-9">
        <h3 className="text-xl font-bold">Advance your Research and Collaborate with our community</h3>
        <div className="mt-4 flex space-x-2 mb-6">
          
          <Button name="Connect"/>
        </div>
      </div>
      <div className="md:w-0.4 w-full mx-5">
        <img src="man_girl.jpg" alt="Graduates" className="w-full rounded-lg shadow-lg " />
      </div>
    </div>
    </>
  );
}

export default Research;
