// src/components/ImageUpload.js
import React, { useState } from 'react';
import { uploadImage } from '../api';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await uploadImage(image);
        setPrediction(result.prediction);
    };

    return (
        <div className="max-w-md mx-auto my-8 p-4 border rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Upload Image</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                >
                    Upload
                </button>
            </form>
            {prediction && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-lg">
                    Prediction: {prediction}
                </div>
            )}
        </div>
    );
};

export default ImageUpload;