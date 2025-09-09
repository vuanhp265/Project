import React from 'react';
import '../PrivacyPolicy/PrivacyPolicy.css'; // Import the CSS file

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>

      <p className="privacy-policy-last-updated">Last Updated: May 13, 2025</p>

      <section className="privacy-policy-section">
        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information from you when you register for our IELTS courses, such as your name, email address, phone number, and educational background. We also collect information about your progress and performance in the courses.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>2. How We Use Your Information</h2>
        <p>
          We use your personal information to provide you with the IELTS courses, to communicate with you about your enrollment and progress, to personalize your learning experience, and to improve our services. We may also use your information for marketing purposes, such as sending you updates about new courses or promotions, but only if you have opted in to receive such communications.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>3. Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. These measures include encryption, secure storage, and restricted access to your data.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>4. Sharing Your Information</h2>
        <p>
          We do not share your personal information with third parties except as necessary to provide our services (e.g., payment processing) or as required by law. Any third parties we share your information with are contractually obligated to protect your data.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided below.
        </p>
      </section>

      <section className="privacy-policy-contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: <a href="mailto:ielts@starclasses.com">ielts@starclasses.com</a>
        </p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;