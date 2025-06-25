import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const WHATSAPP_LINK = 'https://wa.me/your_business_number'; // Replace with your WhatsApp business link
const EMAIL = 'yourbusiness@email.com'; // Replace with your business email
const PHONE = '+1234567890'; // Replace with your business phone number

function copyPhoneNumber(e) {
    // Prevent default link navigation so both copy and dialer work
    e.preventDefault();
    navigator.clipboard.writeText(PHONE);
    window.location.href = `tel:${PHONE}`;
    alert('Phone number copied to clipboard!');
}

export default function Contact() {
    return (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            {/* WhatsApp */}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
                <FaWhatsapp size={32} color="#25D366" />
            </a>
            {/* Email */}
            <a href={`mailto:${EMAIL}`} title="Send Email">
                <FaEnvelope size={32} color="#EA4335" />
            </a>
            {/* Phone */}
            <a href={`tel:${PHONE}`} title="Call" onClick={copyPhoneNumber}>
                <FaPhone size={32} color="#34B7F1" />
            </a>
        </div>
    );
}
