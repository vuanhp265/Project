import React from 'react';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactForm from '../../components/ContactForm/ContactForm';
import Map from '../../components/Map/Map'; // Import Map component
import styles from './ContactPage.module.css';

const contactData = {
  "title": "Contact Us",
  "description": "Our dedicated consulting team is always ready to assist you on your journey to conquer IELTS. Contact us now for detailed advice on courses and the most suitable learning path.",
  "contactDetails": [
    { "type": "Address", "value": "101 Lang Ha Street, Dong Da, Hanoi" },
    { "type": "Phone", "value": "+84 123 456 789" },
    { "type": "Email", "value": "ielts@starclasses.com" },
    { "type": "Website", "value": "www.your-ielts-center.com" },
    { "type": "Working Hours", "value": "Mon - Fri: 8:00 AM - 5:00 PM" }
  ]
};

function ContactPage() {
  return (
    <div className={styles.contactPageContainer}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <ContactInfo contactData={contactData} />
        </div>
        <div className={styles.contactFormSection}>
          <ContactForm />
        </div>
        <div className={styles.mapContainer}>
          <div className={styles.mapResponsive}>
            <Map /> {/* Render component Map */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;