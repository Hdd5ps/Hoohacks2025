// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CampgroundList from './components/CampgroundList';
import CampgroundDetail from './components/CampgroundDetail';
import Login from './components/Login';
import Signup from './components/Signup';
import ImageUpload from './components/ImageUpload';
import PredictionResult from './components/PredictionResult';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <header className="bg-blue-500 text-white p-4">
                    <h1 className="text-2xl font-bold">Camping App</h1>
                </header>
                <main className="container mx-auto p-4">
                    <Switch>
                        <Route path="/" exact component={CampgroundList} />
                        <Route path="/campground/:id" component={CampgroundDetail} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/upload" component={ImageUpload} />
                        <Route path="/prediction" component={PredictionResult} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;