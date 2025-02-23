// src/components/PredictionResult.js
import React from 'react';

const PredictionResult = ({ prediction }) => {
    return (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Prediction Result</h2>
            <p className="text-gray-700">{prediction}</p>
        </div>
    );
};

export default PredictionResult;