import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Your custom CSS file

// Import image assets (replace with your actual image paths)
import welcomeImage from './images/welcome.jpg';
import opportunityImage from './images/opportunity.jpg';
import job1Image from './images/job1.jpg';
import job2Image from './images/job2.jpg';
import job3Image from './images/job3.jpg';

function homepage() {
  return (
    <div className="container">
      {/* Header */}
      <div className="text-center mt-4">
        <h2>GÓC LÀM VIỆC TẠI BEE</h2>
        <hr className="w-25 mx-auto" /> {/* Optional separator */}
      </div>

      {/* Section 1: Welcome */}
      <div className="row mt-4">
        <div className="col-md-8">
          <h4>Chào mừng bạn đến với Bee!</h4>
          <p>Một trường làm việc tại Bee năng động, trẻ trung và đầy cảm hứng là những gì bạn có thể tìm thấy ở Bee. Hãy để tài năng và sức trẻ của bạn được tỏa sáng tại Bee English và mang lại những giá trị tích cực cho việc học ngoại ngữ của thế hệ trẻ Việt Nam!</p>
          <p><a href="#join-us">Join us now </a></p>
        </div>
        <div className="col-md-4">
          <img src={welcomeImage} alt="Welcome at Bee" className="img-fluid rounded" />
        </div>
      </div>

      {/* Section 2: Opportunity */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Cơ hội làm việc tại Bee!</h3>
          <p>Rất nhiều những cơ hội làm việc tại Bee để phát triển kỹ năng, mở rộng mạng lưới cá nhân cũng như "chất" thêm cho sự nghiệp giảng dạy tại Bee English Community!</p>
        </div>
        <div className="col-md-6">
          <img src={opportunityImage} alt="Bee Team" className="img-fluid rounded" />
        </div>
      </div>

      {/* Section 3: Latest Job Postings */}
      <div className="mt-5">
        <h3>Tin tức tuyển dụng mới nhất</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          {/* Job Card 1 */}
          <div className="col">
            <div className="card h-100">
              <img src={job1Image} className="card-img-top" alt="Job 1" />
              <div className="card-body">
                <h5 className="card-title">"E ENGLISH COMMUNITY"</h5>
                <p className="card-text">Vương Thùy Hằng</p>
                <p className="card-text"><small className="text-muted">Thông tin khóa học của Bee English - Vương Thùy Hằng</small></p>
                <p className="card-text"><small className="text-muted">Hiện tại cô đang là Vice Leader của Bee English Community. Nếu như gặp...</small></p>
              </div>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="col">
            <div className="card h-100">
              <img src={job2Image} className="card-img-top" alt="Job 2" />
              <div className="card-body">
                <h5 className="card-title">Admin tuyển dụng</h5>
                <p className="card-text"><small className="text-muted">1. TỔNG QUAN CÔNG VIỆC Vị trí Admin tuyển dụng sẽ làm những công việc...</small></p>
              </div>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="col">
            <div className="card h-100">
              <img src={job3Image} className="card-img-top" alt="Job 3" />
              <div className="card-body">
                <h5 className="card-title">Admin tập sự tuyển dụng</h5>
                <p className="card-text"><small className="text-muted">1. TỔNG QUAN CÔNG VIỆC Vị trí Admin tập sự Tuyển dụng sẽ làm những công việc...</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-4 mb-5">
        <button className="btn btn-primary">Xem thêm tin tức tuyển dụng tại đây </button>
      </div>
    </div>
  );
}

export default homepage;