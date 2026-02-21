import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-poster-style bg-accent">
      <div className="container hero-wrapper">

        {/* The Poster-Inspired Body */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="poster-body"
        >
          {/* Top Tagline from Poster */}
          <div className="poster-header">
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="tagline-italic"
            >
              "Home away from Home"
            </motion.span>
          </div>

          {/* Main Logo - Re-styling for exact poster match */}
          <div className="poster-logo-container">
            <h1 className="logo-main text-black">
              ROOM<span className="text-black">8</span>
            </h1>
            <div className="logo-underline"></div>
            <div className="logo-subtext">
              <span>BOYS HOSTEL & MESS</span>
            </div>
          </div>

          {/* Promotional Band */}
          <div className="promo-band-black">
            <div className="band-content">
              <h2>ROOMS &amp; TIFFIN SERVICE AVAILABLE</h2>
            </div>
          </div>

          {/* Contact Actions - Styled as prominent pill buttons */}
          <div className="hero-cta-group">
            <a
              href="https://wa.me/919425338217?text=Hi,%20I%20want%20to%20enquire%20about%20ROOM8%20hostel"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn wa-btn"
            >
              <MessageCircle size={22} />
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:+919425338217" className="action-btn call-btn">
              <Phone size={22} />
              <span>Call Now</span>
            </a>
          </div>

          <div className="poster-footer-info">
            <p>Premium Living • Hygienic Meals • 24/7 Security</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-poster-style {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(80px, 15vw, 120px) clamp(0.5rem, 3vw, 2rem) clamp(40px, 8vw, 80px);
          position: relative;
          overflow-x: hidden;
        }

        .hero-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 0 clamp(0.5rem, 2vw, 0.5rem);
          box-sizing: border-box;
        }

        .poster-body {
          background-color: var(--accent);
          width: 100%;
          max-width: 900px;
          padding: clamp(1.5rem, 6vw, 6rem) clamp(1rem, 5vw, 4rem);
          border-radius: clamp(24px, 8vw, 100px);
          text-align: center;
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
          border: clamp(5px, 1.5vw, 15px) solid #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          box-sizing: border-box;
        }

        .tagline-italic {
          font-family: var(--font-body);
          font-style: italic;
          font-size: clamp(0.9rem, 3vw, 2.5rem);
          color: #333;
          display: block;
          margin-bottom: clamp(0.75rem, 2vw, 1.5rem);
        }

        .logo-main {
          font-size: clamp(4rem, 18vw, 13rem);
          line-height: 0.85;
          margin-bottom: 0.5rem;
          letter-spacing: -0.05em;
        }

        .logo-underline {
          width: clamp(60px, 20vw, 120px);
          height: clamp(6px, 1.5vw, 12px);
          background-color: var(--primary);
          margin: 0 auto clamp(1rem, 3vw, 2rem);
        }

        .logo-subtext {
          background-color: #000;
          color: #fff;
          padding: clamp(8px, 1.5vw, 14px) clamp(16px, 5vw, 40px);
          border-radius: 50px;
          display: inline-block;
          margin-bottom: clamp(1.5rem, 5vw, 4rem);
          max-width: 100%;
        }

        .logo-subtext span {
          font-family: var(--font-heading);
          font-size: clamp(0.65rem, 2vw, 1.3rem);
          letter-spacing: clamp(0.05em, 1vw, 0.2em);
          white-space: nowrap;
        }

        .promo-band-black {
          position: relative;
          overflow: hidden;
          width: calc(100% + 2 * clamp(1rem, 5vw, 4rem));
          margin-left: calc(-1 * clamp(1rem, 5vw, 4rem));
          margin-right: calc(-1 * clamp(1rem, 5vw, 4rem));
          margin-bottom: clamp(1.5rem, 5vw, 4rem);
          padding: clamp(0.75rem, 2vw, 2rem) clamp(1rem, 3vw, 3rem);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          background: linear-gradient(270deg, #EC682E, #1a1a1a, #0a0a0a, #EC682E);
          background-size: 400% 400%;
          animation: movingGradient 6s ease infinite;
        }

        @keyframes movingGradient {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .band-content h2 {
          color: #fff;
          font-size: clamp(0.75rem, 3vw, 2.5rem);
          letter-spacing: 0.05em;
          margin: 0;
          white-space: normal;
          text-align: center;
          line-height: 1.3;
          word-break: break-word;
        }

        .hero-cta-group {
          display: flex;
          gap: clamp(0.75rem, 3vw, 2rem);
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: clamp(1.5rem, 4vw, 3rem);
          width: 100%;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: clamp(8px, 2vw, 15px);
          padding: clamp(12px, 2.5vw, 18px) clamp(20px, 6vw, 45px);
          border-radius: 100px;
          font-family: var(--font-heading);
          font-size: clamp(0.8rem, 2vw, 1rem);
          text-transform: uppercase;
          transition: var(--transition);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          white-space: nowrap;
        }

        .wa-btn { background-color: #25D366; color: white; }
        .wa-btn:hover { background-color: #128C7E; transform: translateY(-5px); }

        .call-btn { background-color: var(--primary); color: white; }
        .call-btn:hover { background-color: #000; transform: translateY(-5px); }

        .poster-footer-info p {
          font-family: var(--font-heading);
          font-size: clamp(0.55rem, 1.5vw, 0.75rem);
          color: #666;
          letter-spacing: clamp(0.1em, 1vw, 0.3em);
          text-transform: uppercase;
          text-align: center;
        }

        @media (max-width: 480px) {
          .poster-body { border-radius: 20px; }
          .promo-band-black { width: calc(100% + 2.5rem); margin-left: -1.25rem; }
          .band-content h2 { font-size: clamp(0.6rem, 3.5vw, 1rem); white-space: normal; text-align: center; }
          .hero-cta-group { flex-direction: column; gap: 0.75rem; }
          .action-btn { width: 100%; justify-content: center; }
          .logo-subtext span { white-space: normal; }
        }

        @media (max-width: 768px) and (min-width: 481px) {
          .poster-body { border-radius: 30px; }
          .promo-band-black { width: calc(100% + 3rem); margin-left: -1.5rem; }
          .hero-cta-group { flex-direction: column; width: 100%; gap: 0.75rem; }
          .action-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
