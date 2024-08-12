import React from 'react';
import journalImg from './books.jpg'; 
import researchImg from './books2.jpg';
import conferenceImg from './coffee.jpg'; 

function Featured() {
  const callsData = [
    {
      img: journalImg,
      title: "Latest Journal calls",
      description: "Stay informed with the latest call for journal papers. Explore opportunities to publish your research in top academic journals and enhance your scholarly profile.",
    },
    {
      img: researchImg,
      title: "New Research opportunities",
      description: "Discover the latest research paper submission opportunities, find the perfect platform to share your findings.",
    },
    {
      img: conferenceImg,
      title: "Upcoming Conference calls",
      description: "Keep-up-date with upcoming conference papers. Present your research to global audiences, network with peers and stay at the forefront of your field by participating in leading academic conferences.",
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured calls for papers</h2>
        <div className="flex flex-wrap -mx-4">
          {callsData.map((call, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={call.img} alt={call.title} className="w-full md:h-60 h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{call.title}</h3>
                  <p className="text-gray-600">{call.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
