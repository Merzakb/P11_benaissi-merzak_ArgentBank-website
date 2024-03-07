import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import DashboardPages from './pages/DashboardPages';


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/signin" element={<SigninPage />} />
                    <Route path="/dashboard" element={<DashboardPages />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App