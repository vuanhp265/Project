import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form  } from 'react-bootstrap';
import image7 from '../../assets/images/anna_lee.jpg';
import image8 from '../../assets/images/mark_tran.jpg';
import image9 from '../../assets/images/Priya Sharma.png';


const storiesData = [
  {
    id: 1,
    name: 'Anya Petrova',
    achievement: 'Scored 8.0 overall',
    course: 'IELTS Intensive',
    story: "Thanks to the intensive course, I significantly improved my score. The teachers were supportive, and the materials were excellent. I got into my dream university!",
    image: image7,
    tags: ['Reading', 'Writing', 'High Score'],
    likes: 15,
    commentsCount: 2,
    comments: [
      { user: 'User1', text: 'Congratulations on your achievement!' },
      { user: 'StudyBuddy', text: 'That\'s inspiring!' },
    ],
  },
  {
    id: 2,
    name: 'Kenji Tanaka',
    achievement: 'Achieved Band 7.5 in Speaking',
    course: 'IELTS Speaking Pro',
    story: "The speaking sessions were incredibly helpful. I gained confidence and learned valuable techniques. My speaking band improved from 6 to 7.5!",
    image: image8,
    tags: ['Speaking', 'Improvement'],
    likes: 22,
    commentsCount: 5,
    comments: [
      { user: 'LearnerA', text: 'Great job!' },
      { user: 'IELTSGuru', text: 'Speaking is key!' },
      { user: 'KenjiFan', text: 'So happy for you!' },
      { user: 'VoiceUp', text: 'Any tips for speaking?' },
      { user: 'GoalGetter', text: 'This motivates me.' },
    ],
  },
  {
    id: 3,
    name: 'Priya Sharma',
    achievement: 'Improved Reading to Band 7',
    course: 'IELTS Reading Masterclass',
    story: "Reading was my weakest skill. This masterclass provided effective strategies that made a huge difference. I finally achieved Band 7 in Reading.",
    image: image9,
    tags: ['Reading', 'Strategies'],
    likes: 18,
    commentsCount: 3,
    comments: [
      { user: 'ReaderX', text: 'Amazing improvement!' },
      { user: 'BookLover', text: 'Reading can be tough.' },
      { user: 'Strategy101', text: 'What strategies did you use?' },
    ],
  },
  // Thêm các câu chuyện khác ở đây
];

function SuccessStories() {
  const [expandedStoryId, setExpandedStoryId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStories, setFilteredStories] = useState(storiesData);
  const [newCommentText, setNewCommentText] = useState({}); // Lưu trữ bình luận mới cho mỗi bài viết
  const [currentUsername, setCurrentUsername] = useState('Guest'); // Tên người dùng hiện tại (có thể cần xác thực)

  const toggleExpand = (id) => {
    setExpandedStoryId(expandedStoryId === id ? null : id);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = storiesData.filter(story =>
      story.name.toLowerCase().includes(query) ||
      story.achievement.toLowerCase().includes(query) ||
      story.course.toLowerCase().includes(query) ||
      story.story.toLowerCase().includes(query) ||
      story.tags.some(tag => tag.toLowerCase().includes(query))
    );
    setFilteredStories(filtered);
  };

  const handleCommentChange = (event, storyId) => {
    setNewCommentText({...newCommentText, [storyId]: event.target.value});
  };

  const handleAddComment = (storyId) => {
    const commentText = newCommentText[storyId];
    if (commentText && commentText.trim()) {
      const updatedStories = filteredStories.map(story => {
        if (story.id === storyId) {
          return { ...story, comments: [...story.comments, { user: currentUsername, text: commentText.trim() }], commentsCount: story.commentsCount + 1 };
        }
        return story;
      });
      setFilteredStories(updatedStories);
      // Cập nhật lại state gốc nếu cần
      // const originalStoriesUpdated = storiesData.map(...)
      // setStoriesData(originalStoriesUpdated);
      setNewCommentText({...newCommentText, [storyId]: ''}); // Clear input
    }
  };

  return (
    <section className="success-stories py-5">
      <Container>
        <h2 className="text-center mb-5">Inspiring Success Stories</h2>

        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search stories..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <Row className="gy-4">
          {filteredStories.map(story => (
            <Col md={6} lg={4} key={story.id}>
              <Card className="story-card h-100">
                <div className="image-wrapper">
                  <Card.Img variant="top" src={story.image} alt={story.name} />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="story-name">{story.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{story.achievement}</Card.Subtitle>
                  <Card.Text className="story-course">Course: {story.course}</Card.Text>
                  <Card.Text className="story-short-text">
                    {expandedStoryId === story.id ? story.story : `${story.story.substring(0, 100)}...`}
                  </Card.Text>
                  {story.story.length > 100 && (
                    <Button variant="outline-info" size="sm" onClick={() => toggleExpand(story.id)}>
                      {expandedStoryId === story.id ? 'Show Less' : 'Read More'}
                    </Button>
                  )}
                  <div className="story-meta mt-3 d-flex justify-content-between align-items-center">
                    <div className="tags">
                      {story.tags.map(tag => (
                        <span key={tag} className="badge bg-info me-1">{tag}</span>
                      ))}
                    </div>
                    <div className="interactions">
                      <span>❤️ {story.likes}</span>
                      <span className="ms-2">💬 {story.commentsCount}</span>
                    </div>
                  </div>

                  {/* Existing Comments */}
                  {story.comments && story.comments.length > 0 && (
                    <div className="comments mt-3">
                      <h6 className="comments-title">Comments:</h6>
                      {story.comments.map((comment, index) => (
                        <div key={index} className="comment">
                          <span className="comment-user">{comment.user}:</span> <span className="comment-text">{comment.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add New Comment Form */}
                  <div className="add-comment mt-3">
                    <h6 className="add-comment-title">Leave a Comment:</h6>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Your comment..."
                      value={newCommentText[story.id] || ''}
                      onChange={(e) => handleCommentChange(e, story.id)}
                    />
                    <Button variant="primary" size="sm" className="mt-2" onClick={() => handleAddComment(story.id)}>
                      Post Comment
                    </Button>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SuccessStories;