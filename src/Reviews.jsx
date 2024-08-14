import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const reviews = [
        {
            name: 'Jane Doe',
            title: 'Researcher in Biology',
            image: '/path/to/image1.jpg',
            review: 'As a biologist conducting research in the field, I have found this platform to be an invaluable resource...',
        },
        {
            name: 'Michael Brown',
            title: 'Academic Librarian',
            image: '/path/to/image2.jpg',
            review: 'I work as an academic librarian, and I frequently recommend this platform to researchers...',
        },
        {
            name: 'Sarah Johnson',
            title: 'Undergraduate Student in History',
            image: '/path/to/image3.jpg',
            review: 'Even as an undergraduate student, I’ve found this platform to be incredibly helpful for my research projects...',
        },
        {
            name: 'David Liu',
            title: 'Independent Researcher',
            image: '/path/to/image4.jpg',
            review: 'As an independent researcher, I appreciate the flexibility and support offered by this platform...',
        },
        {
            name: 'Alex Nguyen',
            title: 'PhD Candidate in Environmental Science',
            image: '/path/to/image5.jpg',
            review: 'Thanks to this platform’s real-time collation and updating of current journals, I can access the most recent studies...',
        },
        {
            name: 'Maria Gomez',
            title: 'Early Career Scholar in Sociology',
            image: '/path/to/image6.jpg',
            review: 'What truly sets this platform apart is its technological support system...',
        },
    ];

    return (
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-white">Reviews</h2>
                    <p className="text-lg text-white mt-2">4.9 ⭐ Over 1000 reviews</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reviews;
