import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!name || !mobile || !room) return;

    const roomLabel =
      room === 'ac' ? 'AC Room' :
        room === 'non-ac' ? 'Non-AC Room' :
          room === 'tiffin' ? 'Tiffin / Mess Only' : room;

    const text =
      `Hi, my name is ${name}.
I want more information about ${roomLabel}.
My mobile number is ${mobile}.
My enquiry: ${message || 'No additional message.'}`;

    window.open(
      `https://wa.me/919425338217?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const getWALink = () => {
    const msg = `Hi, I want to enquire about ROOM8 hostel.`;
    return `https://wa.me/919425338217?text=${encodeURIComponent(msg)}`;
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

            {/* <div className="detail-pill">
              <div className="icon-circ"><MessageSquare size={24} /></div>
              <div className="text-circ">
                <h3>WHATSAPP</h3>
                <p>Instant availability check</p>
                <a href={getWALink()} target="_blank" rel="noopener noreferrer" className="c-link">Chat Now</a>
              </div>
            </div> */}

            <div className="map-poster-frame">
              <iframe
                src="https://maps.google.com/maps?q=26.206864,78.196255&z=17&output=embed"
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
            <form className="p-form" onSubmit={handleSend}>
              <div className="p-group">
                <label className="p-label">Full Name *</label>
                <input
                  type="text"
                  placeholder="your name "
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="p-group">
                <label className="p-label">Mobile Number *</label>
                <input
                  type="tel"
                  placeholder="your mobile number"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="p-group">
                <label className="p-label">Room Type *</label>
                <select required value={room} onChange={(e) => setRoom(e.target.value)}>
                  <option value="">Select room type…</option>
                  <option value="ac">AC Room</option>
                  <option value="non-ac">Non-AC Room</option>
                  <option value="tiffin">Tiffin / Mess Only</option>
                </select>
              </div>
              <div className="p-group">
                <label className="p-label">Your Message (optional)</label>
                <textarea
                  rows="4"
                  placeholder="Any specific questions or requirements…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="wa-send-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Enquiry on WhatsApp
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

        .p-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #555;
          margin-bottom: 0.5rem;
        }

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

        .wa-send-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 1.1rem 2rem;
          background-color: #25D366;
          color: white;
          border: none;
          border-radius: 14px;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
          box-shadow: 0 8px 24px rgba(37,211,102,0.3);
        }

        .wa-send-btn:hover {
          background-color: #128C7E;
          transform: translateY(-2px);
        }

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
