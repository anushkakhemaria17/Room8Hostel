import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, User, Users } from 'lucide-react';

const Rooms = () => {
  const roomOptions = [
    {
      type: "SEPARATE (SINGLE)",
      icon: <User size={24} />,
      price: "10,000",
      category: "AC ROOM",
      description: "Ideal for students seeking complete focus. This premium separate room comes with all individual amenities.",
      features: ["Private Furnished Space", "Daily 4 Homestyle Meals", "Gigabit Fiber Wi-Fi", "Daily Room Cleaning", "Individual Study Table & Chair"],
      typeKey: "Single AC",
    },
    {
      type: "SHARING ROOMS",
      icon: <Users size={24} />,
      price: "8,000",
      category: "NON-AC / COOLER",
      description: "Vibrant living with study-focused roommates. Spacious layout with high-speed cooling and ventilation.",
      features: ["Spacious Twin Sharing", "Daily 4 Homestyle Meals", "Gigabit Fiber Wi-Fi", "Regular Housekeeping", "Shared Furniture Set"],
      typeKey: "Sharing Non-AC",
    }
  ];

  const getWALink = (roomKey) => {
    const message = `Hi, I want to enquire about ${roomKey} Room at ROOM8 hostel.`;
    return `https://wa.me/919425338217?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="rooms" className="section-padding bg-accent relative">
      <div className="container">
        <div className="section-title">
          <h2>Room Quotations</h2>
          <div className="orange-line"></div>
          <p className="mt-4 text-gray-500 font-medium">Find the perfect space for your academic success</p>
        </div>

        <div className="grid-responsive rooms-modern-grid">
          {roomOptions.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="room-feature-card"
            >
              <div className="room-type-header">
                <div className="type-icon">{room.icon}</div>
                <div className="type-text">
                  <h3>{room.type}</h3>
                  <span className="type-cat">{room.category}</span>
                </div>
              </div>

              <div className="room-price-box">
                <span className="p-val">₹{room.price}</span>
                <span className="p-unit">/month</span>
                <p className="p-sub">* EXCLUDING ELECTRICITY</p>
              </div>

              <p className="room-detailed-desc">{room.description}</p>

              <div className="room-perks">
                {room.features.map((f, i) => (
                  <div key={i} className="perk-item">
                    <Check size={18} className="text-primary" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWALink(room.typeKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-black w-full btn-room-hover"
              >
                <MessageCircle size={20} />
                WhatsApp Enquiry
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .rooms-modern-grid {
          margin-top: 4rem;
        }

        .room-feature-card {
          background-color: var(--accent);
          padding: clamp(1.5rem, 5vw, 3rem);
          border-radius: 40px;
          border: 15px solid #000;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .room-feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.15);
          border-color: var(--primary);
        }

        .room-type-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .type-icon {
          width: 60px;
          height: 60px;
          background-color: #000;
          color: white;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .type-text h3 {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          line-height: 1;
          color: #000;
        }

        .type-cat {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--primary);
          letter-spacing: 0.1em;
        }

        .room-price-box {
          margin-bottom: 25px;
          text-align: center;
          background: #fff;
          padding: 20px;
          border-radius: 20px;
        }

        .p-val {
          font-family: var(--font-heading);
          font-size: 4rem;
          color: #000;
          line-height: 1;
        }

        .p-unit {
          font-size: 1.2rem;
          color: #777;
          font-family: var(--font-heading);
        }

        .p-sub {
          font-size: 0.7rem;
          font-weight: 900;
          color: var(--primary);
          margin-top: 8px;
        }

        .room-detailed-desc {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 2rem;
          font-weight: 500;
          line-height: 1.5;
        }

        .room-perks {
          flex-grow: 1;
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .perk-item {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1rem;
          font-weight: 600;
          color: #333;
        }

        .btn-room-hover:hover {
          background-color: var(--primary);
        }

        .w-full { width: 100%; }

        @media (max-width: 768px) {
          .p-val { font-size: 3rem; }
          .room-feature-card { border-width: 8px; }
        }
      `}</style>
    </section>
  );
};

export default Rooms;
