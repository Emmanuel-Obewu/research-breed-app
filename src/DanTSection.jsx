import React from 'react';

function HowDtWorks() {
  return (
      <>
      <div className="space-y-9">
        <h2 className="text-center text-2xl font-bold mb-4">How DanTower works</h2>
        <p className="text-center text-gray-600 mb-10">Follow our easy 5-step process to get started</p>
      </div>
    <div className="container mx-auto py-12 px-4">
      

      <div className="  flex flex-col md:flex-row md:flex-cols-2 justify-between ">
 
        <div className="md:w-1/2 w-full mb-8 mr-8">
          <div className="flex items-start p-6 border rounded-lg shadow-lg">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="text-lg font-bold">Create your Account</h3>
              <p className="text-gray-600 mt-2">Create a username and password or sign up with your Google, Apple. Verify your account and complete your profile to get started.</p>
            </div>
          </div>
        </div>

        
        <div className="md:w-1/2 w-full mb-8">
          <div className="flex items-start p-6 border rounded-lg shadow-lg ">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="text-lg font-bold">Access a call for papers</h3>
              <p className="text-gray-600 mt-2">Explore the updated lists of call for papers, use the filter to search for papers in your field.</p>
            </div>
          </div>
        </div>

        
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <div className="flex items-start p-6 border rounded-lg shadow-lg ">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="text-lg font-bold">Research with AI</h3>
              <p className="text-gray-600 mt-2">Use our integrated AI to write your papers efficiently, generate quality content for papers, finish your writing faster and easily.</p>
            </div>
          </div>
        </div>

        
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <div className="flex items-start p-6 border rounded-lg shadow-lg ">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">4</div>
            <div>
              <h3 className="text-lg font-bold">Collaborations</h3>
              <p className="text-gray-600 mt-2">Find and collaborate with like minds to write papers, split payments, write quality papers and increase your network.</p>
            </div>
          </div>
        </div>

        
        <div className="md:w-1/2 w-full ">
          <div className="flex items-start p-6 border rounded-lg shadow-lg ">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">5</div>
            <div>
              <h3 className="text-lg font-bold">Paper visibility (Brag your work)</h3>
              <p className="text-gray-600 mt-2">Post contents about your papers on our blog, publish your contents for visibility, citations and increase your influence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HowDtWorks;
