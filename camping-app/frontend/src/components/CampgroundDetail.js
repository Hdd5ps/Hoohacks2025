// src/components/CampgroundDetail.js
import React from 'react';

const CampgroundDetail = ({ campground }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">{campground.name}</h2>
            <p className="text-gray-700 mb-4">{campground.location}</p>
            <p className="text-gray-600">{campground.description}</p>
        </div>
    );
};

export default CampgroundDetail;