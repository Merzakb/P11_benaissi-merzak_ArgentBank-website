import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import DashboardPages from './pages/DashboardPages';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
    return (
        <React.Fragment>
            <Router> 
                <HeaderComponent />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/signin" element={<SigninPage />} />
                    <Route path="/dashboard" element={<DashboardPages />} />
                </Routes>
                <FooterComponent />
            </Router>
        </React.Fragment>
    )
}

export default App