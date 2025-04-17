import React, { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingButtons from './components/FloatingButtons'

// Lazy load route components
const BudgetRoom = lazy(() => import('./components/pages/Deluxe'))
const DeluxeRoom = lazy(() => import('./components/pages/Superdeluxe'))
const PremiumRoom = lazy(() => import('./components/pages/Executive'))

const ScrollIndicator = () => {
  const location = useLocation();

  useEffect(() => {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);
    
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      indicator.style.width = `${scrollPercentage}%`;
    };
    
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      indicator.remove();
    };
  }, [location.pathname]);
  
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollIndicator />
      <Header/>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route index element={
            <main>
              <Hero/>
              <About/>
              <Rooms/>
              <Amenities/>
              <Contact/>
            </main>
          } />
          <Route path="/rooms/deluxe" element={<BudgetRoom />} />
          <Route path="/rooms/superdeluxe" element={<DeluxeRoom />} />
          <Route path="/rooms/executive" element={<PremiumRoom />} />
        </Routes>
      </Suspense>
      <FloatingButtons />
      <Footer/>
    </Router>
  )
}

export default App