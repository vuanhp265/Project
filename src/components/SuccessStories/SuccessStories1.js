import React from 'react';
import '../SuccessStories/SuccessStories1.css';
import image7 from '../../assets/images/anna_lee.jpg';
import image8 from '../../assets/images/mark_tran.jpg';
import image9 from '../../assets/images/Priya Sharma.png';

// Sample success stories data (replace with your actual data)
const storiesData = [
  {
    id: 1,
    name: 'Anya Petrova',
    achievement: 'Scored 7.5 overall in IELTS',
    story: "Before this course, I struggled a lot with my writing and speaking. The instructors provided amazing feedback and the practice materials were very helpful. I'm now accepted into my dream university!",
    image: image7, // Placeholder image
  },
  {
    id: 2,
    name: 'Kenji Tanaka',
    achievement: 'Achieved Band 8 in Listening',
    story: "The listening exercises in this course were exactly what I needed. The strategies taught helped me understand even the trickiest parts. My confidence in listening has soared!",
    image: image8, // Placeholder image
  },
  {
    id: 3,
    name: 'Priya Sharma',
    achievement: 'Improved Reading score to 7',
    story: "Reading was always my weakest area. The techniques shared in this course, especially for tackling different question types, made a huge difference. I finally got the score I needed.",
    image: image9, // Placeholder image
  },
  // Add more success stories here
];

function SuccessStories() {
  return (
    <div className="success-stories-container">
      <h1 className="success-stories-title">Success Stories</h1>
      <div className="stories-grid">
        {storiesData.map((story) => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.name} className="story-image" />
            <h2 className="story-name">{story.name}</h2>
            <p className="story-achievement">{story.achievement}</p>
            <p className="story-text">"{story.story}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;