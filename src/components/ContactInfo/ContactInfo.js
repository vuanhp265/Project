import React from 'react';
import styles from './ContactInfo.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaClock } from 'react-icons/fa';

function ContactInfo({ contactData }) {
  return (
    <div className={styles.contactInfo}>
      <h2 className={styles.title}>{contactData.title}</h2>
      <p className={styles.description}>{contactData.description}</p>
      <div className={styles.details}>
        {contactData.contactDetails.map((item, index) => (
          <div key={index} className={styles.detailItem}>
            <strong>{item.type}:</strong>
            {item.type === 'Address' && <FaMapMarkerAlt className={styles.icon} />}
            {item.type === 'Phone' && <FaPhone className={styles.icon} />}
            {item.type === 'Email' && <FaEnvelope className={styles.icon} />}
            {item.type === 'Website' && <FaGlobe className={styles.icon} />}
            {item.type === 'Working Hours' && <FaClock className={styles.icon} />}
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;