import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sun, Moon, Info } from 'lucide-react';

const About = () => {
  const timings = [
    { label: "Main Gate Open", time: "6:00 AM", icon: <Sun size={20} className="text-primary" /> },
    { label: "Main Gate Close", time: "10:30 PM", icon: <Moon size={20} className="text-secondary" /> },
    { label: "Breakfast Time", time: "8:00 - 9:30 AM", icon: <Clock size={20} /> },
    { label: "Lunch Time", time: "1:00 - 2:30 PM", icon: <Clock size={20} /> },
    { label: "Dinner Time", time: "8:30 - 10:00 PM", icon: <Clock size={20} /> },
  ];

  return (
    <section id="about" className="section-padding bg-accent relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="poster-tag">ESTABLISHED 2024</div>
            <h2 className="title-chunky">Hostel info & Timings</h2>
            <div className="orange-label-divider"></div>

            <div className="timings-grid">
              {timings.map((t, idx) => (
                <div key={idx} className="timing-item">
                  <div className="t-icon">{t.icon}</div>
                  <div className="t-text">
                    <span className="t-label">{t.label}</span>
                    <span className="t-val">{t.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-box-poster mt-10">
              <div className="i-head"><Info size={20} /> <span>Warden On Duty</span></div>
              <p>Warden resides within the premises for immediate assistance and discipline 24/7.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-visual-poster"
          >
            <div className="big-frame">
              <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Hostel Room" />
              <div className="frame-bottom-band">ROOM8 - YOUR PLACE TO GROW</div>
            </div>
            <div className="accent-bg-square"></div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        .poster-tag {
          background-color: #000;
          color: var(--primary);
          padding: 8px 15px;
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
          border-radius: 4px;
        }

        .title-chunky {
          font-size: clamp(3rem, 5vw, 4.5rem);
          color: #000;
          line-height: 0.95;
          margin-bottom: 1rem;
        }

        .orange-label-divider {
          width: 80px;
          height: 10px;
          background-color: var(--primary);
          margin-bottom: 3.5rem;
        }

        .timings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .timing-item {
          background-color: #fff;
          padding: 20px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          border: 2px solid transparent;
          transition: var(--transition);
        }

        .timing-item:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .t-icon {
          width: 45px;
          height: 45px;
          background-color: #f5f5f5;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .t-text {
          display: flex;
          flex-direction: column;
        }

        .t-label {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #999;
        }

        .t-val {
          font-family: var(--font-heading);
          font-size: 1rem;
          color: #000;
        }

        .info-box-poster {
          background-color: var(--primary);
          color: white;
          padding: 25px;
          border-radius: 25px;
          box-shadow: 0 20px 40px rgba(236,104,46,0.3);
        }

        .i-head {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          margin-bottom: 10px;
        }

        .i-head span { font-size: 1.1rem; }

        .big-frame {
          position: relative;
          z-index: 2;
          background-color: #fff;
          padding: 15px;
          border: 12px solid #000;
          transform: rotate(-2deg);
        }

        .big-frame img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
        }

        .frame-bottom-band {
          background-color: #000;
          color: white;
          padding: 12px;
          text-align: center;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          margin-top: 15px;
        }

        .accent-bg-square {
          position: absolute;
          width: 300px;
          height: 300px;
          background-color: var(--primary);
          top: 50%;
          right: -50px;
          transform: translateY(-50%);
          z-index: 1;
          opacity: 0.1;
          border-radius: 50px;
        }

        @media (max-width: 768px) {
          .timings-grid { grid-template-columns: 1fr; }
          .big-frame { transform: rotate(0); margin-top: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default About;
