import React, { useState } from 'react';
import GooeyNav from './components/GooeyNav';
import StarField from './components/StarField';
import About from './pages/About';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Orb from './components/Orb';

const navigationItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Hobbies', href: '/hobbies' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

function App() {
  const [activeSection, setActiveSection] = useState(0);

  const handleNavigation = (index: number) => {
    setActiveSection(index);
  };

  const renderCurrentSection = () => {
    switch (activeSection) {
      case 0:
        return <About />;
      case 1:
        return <Projects />;
      case 2:
        return <Hobbies />;
      case 3:
        return <Resume />;
      case 4:
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-cosmic-gradient relative overflow-hidden">
      {/* Animated Background */}
      <StarField />
      
      {/* Orb Background Element */}
      <div className="fixed top-10 right-10 w-96 h-96 opacity-20 pointer-events-none z-0">
        <Orb hue={270} forceHoverState={true} />
      </div>
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-stellar-400 to-nebula-400 bg-clip-text text-transparent">
                Raunak Saxena
              </span>
            </div>
            <GooeyNav
              items={navigationItems}
              initialActiveIndex={activeSection}
              onItemClick={handleNavigation}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {renderCurrentSection()}
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Raunak Saxena. Bridging Aerospace and AI to explore infinite possibilities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;