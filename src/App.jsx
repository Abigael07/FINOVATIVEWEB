import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MobileProvider } from './context/MobileContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DataAnalytics from './pages/DataAnalytics';
import Excel from './pages/Excel';
import WebDevelopment from './pages/WebDevelopment';
import TaxFiling from './pages/TaxFiling';
import AccountingService from './pages/AccountingService';
import About from './pages/About';
import Contact from './pages/Contact';
import Enrollform from './components/forms/EnrollForm';
import Taxfiling from './components/forms/TaxfillingForm';

function App() {
  return (
    <Router>
      <MobileProvider>
        <Navbar />
        <main style={{ paddingTop: '72px' }}>
          <Routes>
            <Route path="/"                   element={<Home />} />
            <Route path="/data-analytics"     element={<DataAnalytics />} />
            <Route path="/excel"              element={<Excel />} />
            <Route path="/web-development"    element={<WebDevelopment />} />
            <Route path="/tax-filing"         element={<TaxFiling />} />
            <Route path="/accounting-service" element={<AccountingService />} />
            <Route path="/about"              element={<About />} />
            <Route path="/contact"            element={<Contact />} />
            <Route path="/enroll"             element={<Enrollform />} />
            <Route path="/file-now"            element={<Taxfiling />} />
          </Routes>
        </main>
        <Footer />
      </MobileProvider>
    </Router>
  );
}

export default App;
