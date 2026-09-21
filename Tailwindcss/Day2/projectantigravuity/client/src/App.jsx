import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

// Pages
import HomePage from './pages/HomePage';
import AIWarPage from './pages/AIWarPage';
import ModelsPage from './pages/ModelsPage';
import TimelinePage from './pages/TimelinePage';
import Future2030Page from './pages/Future2030Page';
import Developer2030Page from './pages/Developer2030Page';
import JobsPage from './pages/JobsPage';
import SkillsPage from './pages/SkillsPage';
import AgentsPage from './pages/AgentsPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050816] text-slate-100 relative overflow-x-hidden">
      {/* Dynamic Futuristic Ambient Background */}
      <BackgroundEffects />
      
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Page Route Content */}
      <main className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-war" element={<AIWarPage />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/future-2030" element={<Future2030Page />} />
          <Route path="/developer-2030" element={<Developer2030Page />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Global Cyber Footer */}
      <Footer />
    </div>
  );
}
