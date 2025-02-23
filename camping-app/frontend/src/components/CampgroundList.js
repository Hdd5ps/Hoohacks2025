// src/components/CampgroundList.js
import React, { useEffect, useState } from 'react';
import { fetchCampgrounds } from '../api';

const CampgroundList = () => {
    const [campgrounds, setCampgrounds] = useState([]);

    useEffect(() => {
        const getCampgrounds = async () => {
            const data = await fetchCampgrounds();
            setCampgrounds(data);
        };
        getCampgrounds();
    }, []);

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Campgrounds</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {campgrounds.map(campground => (
                    <div key={campground.id} className="p-4 border rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">{campground.name}</h2>
                        <p className="text-gray-700">{campground.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampgroundList;