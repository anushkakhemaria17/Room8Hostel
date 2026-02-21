import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919425338217?text=Hello%20I%20want%20to%20enquire%20about%20ROOM8%20Hostel"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="tooltip">Enquire on WhatsApp</span>

            <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          z-index: 100;
          transition: all 0.3s ease;
        }
        
        .whatsapp-float:hover {
          transform: scale(1.1);
          background-color: #128C7E;
        }
        
        .tooltip {
          position: absolute;
          right: 70px;
          background-color: var(--secondary);
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.85rem;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        
        .whatsapp-float:hover .tooltip {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
        }
      `}</style>
        </a>
    );
};

export default WhatsAppButton;
