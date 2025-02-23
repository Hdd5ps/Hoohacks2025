// src/api.js
const API_URL = 'http://localhost:5000';

export const fetchCampgrounds = async () => {
    const response = await fetch(`${API_URL}/campgrounds`);
    return response.json();
};

export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);

    const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData,
    });

    return response.json();
};

export const loginUser = async (username, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    return response.json();
};

export const signupUser = async (username, password) => {
    const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    return response.json();
};