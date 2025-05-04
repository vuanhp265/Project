import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';
import { useForm } from '../../components/hooks/useForm';
import { FaCheckCircle } from 'react-icons/fa';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const validationsForm = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Invalid email address.';
  }

  if (!form.message.trim()) {
    errors.message = 'Please enter your message.';
  }

  return errors;
};

function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'fading'
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm, (data) => {
    console.log('Form data submitted:', data);
    setSubmissionStatus('success');
  });

  useEffect(() => {
    if (submissionStatus === 'success') {
      const timeoutId = setTimeout(() => {
        setSubmissionStatus('fading');
        setTimeout(() => setSubmissionStatus(null), 400);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [submissionStatus]);

  return (
    <div className={styles.contactFormSection}>
      <h2 className={styles.formTitle}>Send us a message</h2>
      {submissionStatus === 'success' && (
        <div className={styles.successOverlay}>
          <div className={`${styles.successMessage} ${styles.animateScaleIn}`}>
            <FaCheckCircle className={styles.successIcon} /> Sent successfully!
          </div>
        </div>
      )}
      {submissionStatus === 'fading' && (
        <div className={styles.successOverlay}>
          <div className={`${styles.successMessage} ${styles.animateScaleOut}`}>
            <FaCheckCircle className={styles.successIcon} /> Sent successfully!
          </div>
        </div>
      )}
      {submissionStatus === 'error' && (
        <div className={`${styles.alert} ${styles.alertError}`}>
          Please check the fields with errors.
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Please enter your name."
            required
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Please enter your email address."
            required
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number (optional):</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your phone number (optional)"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="5"
            placeholder="Please enter your message."
            required
          ></textarea>
          {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;