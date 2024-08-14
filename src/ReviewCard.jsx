import React from 'react';

const ReviewCard = ({ name, title, image, review }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto md:mx-0">
            <div className="flex flex-col items-center md:flex-row md:items-start mb-4">
                <img className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-4" src={image} alt={name} />
                <div className="text-center md:text-left">
                    <h4 className="font-bold">{name}</h4>
                    <p className="text-sm text-gray-600">{title}</p>
                </div>
            </div>
            <p className="text-sm text-gray-700 mb-4 text-center md:text-left">{review}</p>
            <div className="flex justify-center md:justify-between items-center">
                <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
        </div>
    );
}

export default ReviewCard;
