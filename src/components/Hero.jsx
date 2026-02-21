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
              <h2>ROOMS AND TIFFIN SERVICE AVAILABLE</h2>
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
          padding: 100px 0 60px;
          position: relative;
        }

        .hero-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .poster-body {
          background-color: var(--accent);
          width: 100%;
          max-width: 900px;
          padding: clamp(3rem, 10vw, 6rem) clamp(1rem, 5vw, 4rem);
          border-radius: clamp(40px, 15vw, 150px);
          text-align: center;
          box-shadow: 0 60px 120px rgba(0,0,0,0.4);
          border: 15px solid #000;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tagline-italic {
          font-family: var(--font-body);
          font-style: italic;
          font-size: clamp(1.2rem, 3vw, 2.5rem);
          color: #333;
          display: block;
          margin-bottom: 1.5rem;
        }

        .logo-main {
          font-size: clamp(6rem, 18vw, 13rem);
          line-height: 0.8;
          margin-bottom: 0.5rem;
          letter-spacing: -0.05em;
        }

        .logo-underline {
          width: 120px;
          height: 12px;
          background-color: var(--primary);
          margin: 0 auto 2rem;
        }

        .logo-subtext {
          background-color: #000;
          color: #fff;
          padding: 12px 40px;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 4rem;
        }

        .logo-subtext span {
          font-family: var(--font-heading);
          font-size: clamp(0.9rem, 1.5vw, 1.3rem);
          letter-spacing: 0.2em;
        }

        .promo-band-black {
          background-color: #000;
          width: calc(100% + clamp(2rem, 10vw, 8rem));
          margin-bottom: 4rem;
          padding: 2rem;
          transform: rotate(-1deg);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .band-content h2 {
          color: #fff;
          font-size: clamp(1.2rem, 4vw, 3rem);
          letter-spacing: 0.05em;
          margin: 0;
        }

        .hero-cta-group {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px 45px;
          border-radius: 100px;
          font-family: var(--font-heading);
          font-size: 1rem;
          text-transform: uppercase;
          transition: var(--transition);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .wa-btn { background-color: #25D366; color: white; }
        .wa-btn:hover { background-color: #128C7E; transform: translateY(-5px); }

        .call-btn { background-color: var(--primary); color: white; }
        .call-btn:hover { background-color: #000; transform: translateY(-5px); }

        .poster-footer-info p {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          color: #666;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .poster-body { border-width: 8px; border-radius: 60px; }
          .promo-band-black { width: 100vw; margin-left: -1rem; margin-right: -1rem; }
          .hero-cta-group { flex-direction: column; width: 100%; gap: 1rem; }
          .action-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
