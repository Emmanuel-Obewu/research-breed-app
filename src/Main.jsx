import React from 'react';
import Button from './ShortButton'



function HeroSection() {
  return (
    <section className="bg-purple-100 py-12 md:mb-5">
      <div className="container mx-auto flex ss:flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Find, connect, write. The ResearchBreed way (Your writing Ally)
          </h1>
          <p className="text-lg text-black-100 mb-6 font-bold">
            Your source for new research opportunities
          </p>
          <Button name="Sign Up"/>
        </div>
        <div className="md:w-1/2 p-6">
          <img src="girl.png" alt="Research" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
