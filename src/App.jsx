import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage  from './components/HomePage'
import CareersPage from './components/CareersPage';
import PortfolioPage from './components/PortfolioPage';
import ServicePage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
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
