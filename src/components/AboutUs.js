import React from 'react';

import '../Style/AboutUs.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faChalkboardTeacher, faBookOpen, faUsers, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import instructorImage from '../images/su-menh-3.webp'; // Replace with your actual image path
import Image from '../images/hoc-la-phai-dung-duoc.webp';
import Image1 from '../images/su-menh-2.webp';
import Image2 from '../images/su-menh-4.webp';






function AboutUsAdvanced() {
  return (
    <div className="about-us-advanced-container">
      {/* Hero Section */}
      <section className="hero-advanced-section">
        <div className="hero-advanced-content">
          <div className="hero-advanced-text">
            <h1>Achieve Your Dream IELTS Score with Our Expert Guidance</h1>
            <p className="subtitle">Unlock global opportunities with our comprehensive and results-oriented IELTS preparation courses.</p>
            <div className="cta-buttons">
            <Link to="/courses" className="primary-button-link"> {/* Thêm Link và class cho việc style */}
              <button className="primary-button">Explore Courses</button>
            </Link>
            <Link to="/contact" className="primary-button-link"> {/* Thêm Link và class cho việc style */}
              <button className="secondary-button">Contact Us</button>
            </Link>
            </div>
          </div>
          <div className="hero-advanced-image">
             <img src={Image} alt="Students celebrating success" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-advanced-section">
        <h2>Why Choose Our IELTS Program?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="feature-icon" />
            <h3>Experienced & Certified Instructors</h3>
            <p>Learn from a team of highly qualified and certified IELTS instructors with a proven track record of student success.</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon={faBookOpen} className="feature-icon" />
            <h3>Comprehensive & Updated Curriculum</h3>
            <p>Our curriculum covers all aspects of the IELTS exam, incorporating the latest test formats and effective strategies.</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon={faGraduationCap} className="feature-icon" />
            <h3>Personalized Learning Paths</h3>
            <p>We offer tailored learning approaches and adaptive materials to cater to your individual learning style and proficiency level.</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon={faUsers} className="feature-icon" />
            <h3>Interactive & Engaging Classes</h3>
            <p>Benefit from dynamic and interactive lessons that encourage active participation and practical application of skills.</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon={faClock} className="feature-icon" />
            <h3>Flexible Learning Options</h3>
            <p>Choose from a variety of flexible learning formats, including online live classes, on-demand courses, and blended learning.</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
            <h3>Proven Success Rate</h3>
            <p>Join a community of successful alumni who have achieved their target IELTS scores with our expert guidance.</p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="our-approach-section">
        <h2>Our Holistic Approach to IELTS Preparation</h2>
        <div className="approach-content">
          <div className="approach-text">
            <h3>Strategic Skill Development</h3>
            <p>We focus on developing core skills in Listening, Reading, Writing, and Speaking through targeted exercises and proven techniques.</p>
            <h3>Extensive Practice & Feedback</h3>
            <p>Gain confidence through numerous practice tests and receive detailed, constructive feedback from our experienced instructors.</p>
            <h3>Exam-Taking Strategies</h3>
            <p>Master effective exam-taking strategies and time management skills to maximize your performance on test day.</p>
            <h3>Supportive Learning Environment</h3>
            <p>Benefit from a supportive and encouraging learning environment that fosters motivation and helps you stay on track.</p>
          </div>
          <div className="approach-image">
            <img src={instructorImage} alt="Experienced Instructor" />
          </div>
        </div>
      </section>

      {/* Testimonials Section (Optional - Add if you have testimonials) */}
      {/* <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <p>"The instructors were fantastic and provided excellent feedback. I improved my score significantly!" - John Doe</p>
          </div>
          <div className="testimonial">
            <p>"The flexible online classes made it easy to study around my work schedule. Highly recommended!" - Jane Smith</p>
          </div>
          {/* Add more testimonials */}
        {/* </div>
      </section> */}

      {/* Our Team Section */}
      <section className="our-team-section">
        <h2>Meet Our Dedicated Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={Image2} alt="Instructor 1" className="team-member-image" />
            <h3>Nguyen Van A</h3>
            <p className="team-member-title">Lead IELTS Instructor</p>
            {/* Add social media links or a brief bio if needed */}
          </div>
          <div className="team-member">
            <img src={Image1} alt="Instructor 2" className="team-member-image" />
            <h3>Tran Thi B</h3>
            <p className="team-member-title">Senior IELTS Tutor</p>
          </div>
          {/* Add more team members */}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-advanced-section">
        <div className="cta-advanced-content">
          <h2>Ready to Elevate Your IELTS Score?</h2>
          <p>Join our community of successful IELTS test-takers. Enroll in our courses today!</p>
          <Link to="/courses" className="primary-button-link"> {/* Thêm Link và class cho việc style */}
            <button className="primary-button">View Our Course Catalog</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="advanced-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Your Advanced IELTS Prep Center | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
          <div className="social-links">
            {/* Add social media icons/links */}
            {/* <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUsAdvanced;