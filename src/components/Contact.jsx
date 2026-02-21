import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const getWALink = () => {
    const message = `Hi, I want to enquire about ROOM8 hostel.`;
    return `https://wa.me/919425338217?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="contact-premium band-black text-white">
      <div className="container">

        <div className="section-title">
          <h2 className="text-white">Get In Touch</h2>
          <div className="orange-line"></div>
        </div>

        <div className="contact-poster-grid">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-details-box"
          >
            <div className="detail-pill address-pill">
              <div className="icon-circ"><MapPin size={24} /></div>
              <div className="text-circ">
                <h3>LOCATION</h3>
                <p>129, Anupam Nagar Extension, Panchsheel Society, Gwalior.</p>
              </div>
            </div>

            <div className="detail-pill orange-pill">
              <div className="icon-circ"><Phone size={24} /></div>
              <div className="text-circ">
                <h3>CALL DIRECT</h3>
                <p><a href="tel:+919425338217">+91 9425338217</a></p>
                <p><a href="tel:+918770197396">+91 8770197396</a></p>
              </div>
            </div>

            <div className="detail-pill">
              <div className="icon-circ"><MessageSquare size={24} /></div>
              <div className="text-circ">
                <h3>WHATSAPP</h3>
                <p>Instant availability check</p>
                <a href={getWALink()} target="_blank" rel="noopener noreferrer" className="c-link">Chat Now</a>
              </div>
            </div>

            <div className="map-poster-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.583483244247!2d78.1969408!3d26.242784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c748c8266479%3A0xe5395679f291e0a2!2sPanchsheel%20Society%2C%20Gwalior!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 'clamp(5px, 1vw, 10px) solid #fff', borderRadius: '20px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="form-poster-wrap"
          >
            <div className="form-head-ribbon">SUBMIT ENQUIRY</div>
            <form className="p-form" onSubmit={(e) => e.preventDefault()}>
              <div className="p-group">
                <input type="text" placeholder="FULL NAME" required />
              </div>
              <div className="p-group">
                <input type="tel" placeholder="MOBILE NUMBER" required />
              </div>
              <div className="p-group">
                <select required>
                  <option value="">ROOM TYPE?</option>
                  <option value="ac">AC ROOM</option>
                  <option value="non-ac">NON-AC ROOM</option>
                </select>
              </div>
              <div className="p-group">
                <textarea rows="4" placeholder="MESSAGE"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                <Send size={20} />
                SEND NOW
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        .contact-premium {
          padding: var(--section-space) 0;
        }

        .contact-poster-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(clamp(300px, 45%, 600px), 1fr));
          gap: clamp(3rem, 6vw, 6rem);
          margin-top: 4rem;
        }

        .detail-pill {
          display: flex;
          align-items: center;
          gap: 20px;
          background-color: #111;
          padding: clamp(1.5rem, 3vw, 2.5rem);
          border-radius: 25px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255,255,255,0.05);
          transition: var(--transition);
        }

        .detail-pill:hover {
          transform: translateX(10px);
          background-color: #1a1a1a;
          border-color: var(--primary);
        }

        .orange-pill { border-left: 10px solid var(--primary); }

        .icon-circ {
          width: clamp(50px, 6vw, 70px);
          height: clamp(50px, 6vw, 70px);
          background-color: var(--primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          flex-shrink: 0;
        }

        .text-circ h3 {
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 5px;
        }

        .text-circ p, .text-circ a {
          font-size: clamp(0.9rem, 1.2vw, 1.1rem);
          color: #999;
          font-weight: 500;
        }

        .c-link {
          color: var(--primary) !important;
          font-weight: 800 !important;
          text-decoration: underline !important;
        }

        .map-poster-frame { margin-top: 3rem; }

        .form-poster-wrap {
          background-color: var(--accent);
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
          border: 10px solid #000;
        }

        .form-head-ribbon {
          background-color: var(--primary);
          color: white;
          padding: 2rem;
          text-align: center;
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 2vw, 2rem);
        }

        .p-form { padding: clamp(2rem, 5vw, 4rem); }

        .p-group { margin-bottom: 1.5rem; }

        .p-group input, .p-group select, .p-group textarea {
          width: 100%;
          padding: 1.2rem;
          background-color: #fff;
          border: 2px solid #ddd;
          border-radius: 12px;
          font-family: var(--font-body);
          font-weight: 600;
          color: #000;
          font-size: 1rem;
        }

        .p-group input:focus {
          border-color: var(--primary);
          outline: none;
          box-shadow: 0 0 0 4px rgba(236, 104, 46, 0.1);
        }

        .w-full { width: 100%; }

        @media (max-width: 768px) {
          .detail-pill { padding: 1.5rem; }
          .icon-circ { width: 50px; height: 50px; }
          .p-form { padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
