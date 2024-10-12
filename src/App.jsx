import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage  from './components/HomePage/HomePage.jsx'
import CareersPage from './components/CareersPage/CareersPage.jsx';
import PortfolioPage from './components/PortfolioPage/PortfolioPage.jsx';
import ServicePage from './components/ServicesPage/ServicePage.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import './App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />     
      <Route path="/about" element={<AboutPage />} /> 
      <Route path="/services" element={<ServicePage />} /> 
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  </Router>
  )
}

export default App
