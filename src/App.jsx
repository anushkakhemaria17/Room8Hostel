import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Facilities />
        <About />
        <Contact />
      </main>
      <WhatsAppButton />
      <footer style={{ backgroundColor: 'var(--secondary)', color: 'var(--white)', padding: '20px 0', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} ROOM8 Boys Hostel & Mess. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
