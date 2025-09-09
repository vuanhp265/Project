
import '../Instructors/Instructors.css'; // Import the CSS file
import Image4 from '../../assets/images/john_doe.jpg';
import Image5 from '../../assets/images/jane_smith.webp';
import Image6 from '../../assets/images/emily_brown.webp';
import React, { useState } from 'react';

// Sample instructor data (replace with your actual data)
const instructorsData = [
    {
      id: 1,
      name: 'Dr. Emily Carter',
      expertise: 'IELTS Reading & Writing Specialist',
      bio: 'With over 10 years of experience teaching IELTS, Dr. Carter holds a PhD in Linguistics and has helped hundreds of students achieve their target scores. Her engaging teaching style and detailed feedback have been praised by many students. She focuses on breaking down complex reading passages and refining writing techniques.',
      image: Image4,
      reviews: [
        { text: '"Emily is fantastic! Her lessons are so clear and helpful."', rating: 5 },
        { text: '"Really improved my writing score thanks to Emily."', rating: 4.5 },
      ],
      coursesTaught: 50,
    },
    {
      id: 2,
      name: 'Mr. James Miller',
      expertise: 'IELTS Listening & Speaking Expert',
      bio: 'James is a certified IELTS examiner with a passion for helping students improve their communication skills. He has a Master\'s in TESOL. His interactive speaking sessions and focus on pronunciation have helped countless students gain confidence. He also provides excellent strategies for tackling the listening sections.',
      image: Image5,
      reviews: [
        { text: '"James made speaking practice enjoyable and effective."', rating: 5 },
        { text: '"My listening skills improved significantly with James\' guidance."', rating: 4 },
      ],
      coursesTaught: 45,
    },
    {
      id: 3,
      name: 'Ms. Sophia Lee',
      expertise: 'Overall IELTS Strategy & Techniques',
      bio: 'Sophia specializes in providing students with effective strategies to tackle all sections of the IELTS exam. She has a proven track record of success in helping students understand the exam format and optimize their performance. She offers valuable insights into time management and test-taking skills.',
      image: Image6,
      reviews: [
        { text: '"Sophia\'s strategies were a game-changer for me."', rating: 5 },
        { text: '"Very knowledgeable and helpful in understanding the IELTS structure."', rating: 4.5 },
      ],
      coursesTaught: 60,
    },
  ];
  
  function Instructors() {
    return (
      <div className="instructors-container">
        <h1 className="instructors-title">Our Experienced Instructors</h1>
        <div className="instructors-grid">
          {instructorsData.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    );
  }
  
  function InstructorCard({ instructor }) {
    const [showFullBio, setShowFullBio] = useState(false);
    const bioToShow = showFullBio ? instructor.bio : instructor.bio.substring(0, 100) + (instructor.bio.length > 100 ? '...' : '');
  
    return (
      <div>
        <div className="instructor-card">
          <img src={instructor.image} alt={instructor.name} className="instructor-image" />
          <h2 className="instructor-name">{instructor.name}</h2>
          <p className="instructor-expertise">{instructor.expertise}</p>
          <div className="instructor-info">
            <p className="instructor-bio">{bioToShow}</p>
            {instructor.bio.length > 100 && (
              <button className="read-more-btn" onClick={() => setShowFullBio(!showFullBio)}>
                {showFullBio ? 'Show Less' : 'Show More'}
              </button>
            )}
            <p className="instructor-courses">Courses Taught: {instructor.coursesTaught}</p>
            {instructor.reviews && instructor.reviews.length > 0 && (
              <div className="instructor-reviews">
                <h3 className="reviews-title">Recent Reviews:</h3>
                <ul>
                  {instructor.reviews.map((review, index) => (
                    <li key={index}>"{review.text}" ({'⭐'.repeat(Math.round(review.rating))})</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default Instructors;