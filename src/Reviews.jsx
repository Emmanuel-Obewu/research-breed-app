import React from 'react';

function ReviewCard({ name, title, quote }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white">
      <div className="flex items-center mb-4">
        <img src="/path/to/profile-image.jpg" alt={name} className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm">{title}</p>
        </div>
      </div>
      <p className="text-sm">{quote}</p>
    </div>
  );
}

function Reviews() {
  const reviews = [
    {
      name: 'Jane Doe',
      title: 'Researcher in Biology',
      quote: 'As a biologist conducting research in the field, I have found this platform to be an invaluable resource. The AI-integrated tool has saved me countless hours by efficiently summarizing relevant papers and identifying key insights. Additionally, the collaborative space has streamlined the process of working with other researchers on research papers. I highly recommend this platform to anyone in academia looking to enhance their research workflow.',
    },
    // ... other reviews
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
