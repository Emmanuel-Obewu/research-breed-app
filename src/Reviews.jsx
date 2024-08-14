import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const reviews = [
    {
      name: 'Jane Doe',
      title: 'Researcher in Biology',
      image: 'girl.png',
      review: 'As a biologist conducting research in the field, I have found this platform to be an invaluable resource...',
    },
    {
      name: 'Michael Brown',
      title: 'Academic Librarian',
      image: 'girl.png',
      review: 'I work as an academic librarian, and I frequently recommend this platform to researchers and students...',
    },
    {
      name: 'Sarah Johnson',
      title: 'Undergraduate Student in History',
      image: 'girl.png',
      review: "Even as an undergraduate student, I've found this platform to be incredibly helpful for my research projects...",
    },
    {
      name: 'David Liu',
      title: 'Independent Researcher',
      image: 'girl.png',
      review: 'As an independent researcher, I appreciate the flexibility and support offered by this platform...',
    },
    {
      name: 'Alex Nguyen',
      title: 'PhD Candidate in Environmental Science',
      image: 'girl.png',
      review: "Thanks to this platform's real-time collation and updating of current journals, I can access the most recent studies and developments...",
    },
    {
      name: 'Maria Gomez',
      title: 'Early Career Scholar in Sociology',
      image: 'girl.png',
      review: "What truly sets this platform apart is its technical support system. The team behind it is responsive and knowledgeable...",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-white">Reviews</h2>
          <p className="text-lg text-white mt-2">4.9 ⭐ Over 1000 reviews</p>
        </div>
        {isMobile ? (
          <div className="relative">
            <div className="flex justify-center">
              <ReviewCard {...reviews[currentIndex]} />
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
            >
              &#8594;
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
