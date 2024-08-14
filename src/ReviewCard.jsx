import React from 'react';

const ReviewCard = ({ name, title, image, review }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
            <div className="flex items-center mb-4">
                <img className="w-16 h-16 rounded-full mr-4" src={image} alt={name} />
                <div>
                    <h4 className="font-bold">{name}</h4>
                    <p className="text-sm text-gray-600">{title}</p>
                </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">{review}</p>
            <div className="flex justify-between items-center">
                <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
        </div>
    );
}

export default ReviewCard;
