# Hoohacks2025


### Project Structure
```
camping-app/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── routes.py
│   │   ├── config.py
│   │   └── utils.py
│   ├── migrations/
│   ├── venv/
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CampgroundList.js
│   │   │   ├── CampgroundDetail.js
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   ├── ImageUpload.js
│   │   │   └── PredictionResult.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── api.js
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── README.md
└── README.md
```

### Backend with Flask

1. Set Up Flask Project:
   - Create a virtual environment and install Flask.
   - Set up the project structure with `app`, `models`, `routes`, `config`, and `utils`.

2. Database Setup:
   - Use SQLite for simplicity.
   - Define models for campground information, user data, and AI model predictions in `models.py`.

3. API Endpoints:
   - Create routes for campground listings, user authentication, image uploads, and AI predictions in `routes.py`.


### Frontend with React

1. Set Up React Project:
   - Use Create React App to set up the project.
   - Organize components for campground listings, user authentication, image upload, and AI predictions.

2. API Integration:
   - Create an `api.js` file to handle API calls to the Flask backend.

3. Frontend with React and Tailwind CSS

    Install Tailwind CSS:
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p



### AI Model Integration with Azure

1. Train and Deploy Model:
   - Use Azure Custom Vision to train your model.
   - Deploy the model using Azure Machine Learning and expose it as a web service.

2. Azure Functions:
   - Create Azure Functions to handle image uploads, process them using the AI model, and return predictions.

### Combining Both Functionalities

1. Image Upload and Prediction:
   - Users upload images through the React frontend.
   - The Flask backend handles the image upload and calls the Azure Function to get predictions.
   - The React frontend displays the prediction results.
