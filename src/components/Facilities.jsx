import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Wifi, Wind, Zap, Trash2, ShieldCheck, BookOpen, Coffee, Sun, Soup, Moon } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    { icon: <Utensils size={40} />, title: "Mess", desc: "Healthy 4-Meals" },
    { icon: <Wifi size={40} />, title: "Wi-Fi", desc: "High Speed" },
    { icon: <Wind size={40} />, title: "AC/Cooler", desc: "Comfort Living" },
    { icon: <BookOpen size={40} />, title: "Study", desc: "Quiet Zones" },
    { icon: <ShieldCheck size={40} />, title: "Safety", desc: "CCTV Active" },
    { icon: <Trash2 size={40} />, title: "Clean", desc: "Daily Service" },
  ];

  const messMenu = [
    { time: "8:00 AM", meal: "Breakfast", icon: <Coffee size={24} />, items: "Poha, Paratha, Tea/Milk" },
    { time: "1:00 PM", meal: "Lunch", icon: <Sun size={24} />, items: "Dal, Paneer/Veg, Roti, Rice" },
    { time: "5:30 PM", meal: "Evening Snacks", icon: <Soup size={24} />, items: "Tea, Samosa/Sandwich" },
    { time: "8:30 PM", meal: "Dinner", icon: <Moon size={24} />, items: "Veg, Dal, Roti, Rice, Sweet" },
  ];

  const duplicatedFacilities = [...facilities, ...facilities, ...facilities];

  return (
    <section id="facilities" className="facilities-premium band-black overflow-hidden bg-black">
      <div className="container">
        <div className="section-title">
          <h2 className="text-white">Premium Facilities</h2>
          <div className="orange-line"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mess-menu-card"
          >
            <div className="card-header-orange">
              <Utensils size={30} />
              <h3>DAILY MESS MENU</h3>
            </div>
            <div className="menu-items-list">
              {messMenu.map((item, idx) => (
                <div key={idx} className="menu-row">
                  <div className="m-icon">{item.icon}</div>
                  <div className="m-info">
                    <div className="m-head">
                      <span className="m-meal">{item.meal}</span>
                      <span className="m-time">{item.time}</span>
                    </div>
                    <p className="m-desc">{item.items}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mess-footer">
              * Nutritious & Hygenic Homelike Meals
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="facilities-text"
          >
            <h3 className="sub-heading-accent">Beyond Just a Living Space</h3>
            <p className="text-gray-400" style={{ marginBottom: "2.5rem", lineHeight: "1.8" }}>
              We focus on the holistic wellbeing of our students. From high-speed internet for studies
              to 24/7 security and homemade meals, ROOM8 provides everything you need to feel at home.
            </p>
            <div className="quick-points">
              <div className="q-point text-white"><ShieldCheck size={20} className="text-primary" /> <span>24x7 CCTV &amp; Warden</span></div>
              {/* <div className="q-point text-white"><Zap size={20} className="text-primary" /> <span>Dual Power Backup</span></div> */}
              <div className="q-point text-white"><Wifi size={20} className="text-primary" /> <span>Gigabit Fiber Internet</span></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="marquee-container mt-10">
        <motion.div
          className="marquee-track"
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedFacilities.map((item, index) => (
            <div key={index} className="facility-card-pill">
              <div className="icon-wrap">
                {item.icon}
              </div>
              <div className="text-wrap">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .facilities-premium {
          padding: var(--section-space) 0;
        }

        .mess-menu-card {
          background-color: #1a1a1a;
          border-radius: 40px;
          overflow: hidden;
          border: 10px solid #000;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }

        .card-header-orange {
          background-color: var(--primary);
          color: white;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .card-header-orange h3 {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          margin: 0;
        }

        .menu-items-list {
          padding: 20px 40px;
        }

        .menu-row {
          display: flex;
          gap: 25px;
          padding: 25px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          align-items: flex-start;
          width: 100%;
        }

        .menu-row:last-child {
          border-bottom: none;
        }

        .m-icon {
          width: 50px;
          height: 50px;
          background-color: rgba(236, 104, 46, 0.1);
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .m-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 20px;
        }

        .m-meal {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          color: white;
          flex-grow: 1;   /* THIS pushes the time to the edge */
        }

        .m-time {
          font-size: 0.75rem;
          background-color: #333;
          color: #aaa;
          padding: 4px 14px;
          border-radius: 100px;
          font-weight: 700;
          margin-left: auto;   /* forces extreme right alignment */
          white-space: nowrap;
        }

        .m-desc {
          font-size: 0.9rem;
          color: #888;
          font-weight: 500;
        }
        
        .m-info {
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .mess-footer {
          padding: 20px;
          text-align: center;
          background-color: #111;
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .sub-heading-accent {
          font-family: var(--font-heading);
          font-size: 3rem;
          color: white;
          margin-bottom: 2rem;
          line-height: 1.05;
        }

        .quick-points {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .q-point {
          display: flex;
          align-items: center;
          gap: 18px;
          font-weight: 600;
          font-size: 1.1rem;
          padding: 14px 20px;
          background-color: rgba(255,255,255,0.04);
          border-radius: 14px;
          border-left: 3px solid var(--primary);
        }

        .marquee-container {
          background-color: var(--primary);
          padding: 3rem 0;
          display: flex;
        }

        .marquee-track {
          display: flex;
          gap: 3rem;
          padding-left: 3rem;
        }

        .facility-card-pill {
          background-color: #000;
          border-radius: 100px;
          padding: 12px 50px 12px 12px;
          display: flex;
          align-items: center;
          gap: 20px;
          min-width: max-content;
          border: 2px solid rgba(255,255,255,0.1);
        }

        .icon-wrap {
          width: 70px;
          height: 70px;
          background-color: #fff;
          color: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        @media (max-width: 992px) {
          .mess-menu-card { margin-bottom: 2rem; }
          .sub-heading-accent { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Facilities;
