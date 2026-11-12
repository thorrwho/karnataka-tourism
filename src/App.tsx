import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { AuthModal } from './components/common/AuthModal';

import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { PlannerPage } from './pages/PlannerPage';
import { HiddenGemsPage } from './pages/HiddenGemsPage';
import { HeritageCulturePage } from './pages/HeritageCulturePage';
import { FoodExperiencesPage } from './pages/FoodExperiencesPage';
import { InteractiveMapPage } from './pages/InteractiveMapPage';
import { AboutPage } from './pages/AboutPage';
import { ProfilePage } from './pages/ProfilePage';

// Scroll to top automatically when location changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-cream-100 text-charcoal-800">
            <Navbar />
            
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/planner" element={<PlannerPage />} />
                <Route path="/hidden-gems" element={<HiddenGemsPage />} />
                <Route path="/heritage" element={<HeritageCulturePage />} />
                <Route path="/food" element={<FoodExperiencesPage />} />
                <Route path="/map" element={<InteractiveMapPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>

            <Footer />
            <AuthModal />
          </div>
        </Router>
      </AuthProvider>
    </ToastProvider>
  );
};

export default App;

