import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import LoginModal from './Components/LoginModal';
import SignUpModal from './Components/SignUpModal';
import HomePage from './HomePage';
import AboutPage from './Pages/AboutPage';
import PropertyAssessmentPage from './Pages/PropertyAssessmentPage';
import FileProtestPage from './Pages/FileProtestPage';
import TaxCalculatorPage from './Pages/TaxCalculatorPage';
import ResourcesPage from './Pages/ResourcesPage';
import ContactPage from './Pages/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClick = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigation onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage onSignUpClick={handleSignUpClick} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/property-assessment" element={<PropertyAssessmentPage />} />
            <Route path="/file-protest" element={<FileProtestPage />} />
            <Route path="/tax-calculator" element={<TaxCalculatorPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <LoginModal 
          show={showLogin} 
          onHide={() => setShowLogin(false)}
          onSwitchToSignUp={handleSignUpClick}
        />
        <SignUpModal 
          show={showSignUp} 
          onHide={() => setShowSignUp(false)}
          onSwitchToLogin={handleLoginClick}
        />
      </div>
    </Router>
  );
}

export default App;
