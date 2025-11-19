import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Works from './Pages/Works';
import Contact from './Pages/Contact';
import FutureOfAI from './Pages/blog/FutureOfAI';
import MachineLearningMarketing from './Pages/blog/MachineLearningMarketing';
import WebDevelopmentPractices from './Pages/blog/WebDevelopmentPractices';
import AIChatbots from './Pages/blog/AIChatbots';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/future-of-ai-in-business-2025" element={<FutureOfAI />} />
        <Route path="/blog/machine-learning-marketing-roi" element={<MachineLearningMarketing />} />
        <Route path="/blog/web-development-practices-2025" element={<WebDevelopmentPractices />} />
        <Route path="/blog/ai-chatbots-customer-service" element={<AIChatbots />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
