import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';


function App() {
    return (
        <React.Fragment>
            <Router> 
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </React.Fragment>
    )
}

export default App