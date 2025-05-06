import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/LoginPage.css'; // Import file CSS tùy chỉnh (tùy chọn)

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    setError(''); // Xóa thông báo lỗi khi người dùng bắt đầu nhập
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // **Tính năng 1: Xác thực phía Client (ví dụ đơn giản)**
    if (!username || !password) {
      setError('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.');
      return;
    }

    // **Tính năng 2: Gọi API đăng nhập (giả định)**
    try {
      const response = await fetch('/api/login', { // Thay '/api/login' bằng API thực tế của bạn
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // **Tính năng 3: Xử lý đăng nhập thành công**
        console.log('Đăng nhập thành công!', data);
        localStorage.setItem('authToken', data.token); // Lưu token (nếu có)
        navigate('/dashboard'); // **Tính năng 4: Điều hướng sau khi đăng nhập**
      } else {
        // **Tính năng 5: Xử lý lỗi đăng nhập từ API**
        setError(data.message || 'Đăng nhập không thành công. Vui lòng thử lại.');
      }
    } catch (error) {
      // **Tính năng 6: Xử lý lỗi mạng hoặc lỗi không xác định**
      console.error('Lỗi đăng nhập:', error);
      setError('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng Nhập</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Tên đăng nhập:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Đăng Nhập</button>

        {/* **Tính năng 7: Liên kết đến trang đăng ký (tùy chọn)** */}
        <p className="signup-link">
          Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
        </p>

        {/* **Tính năng 8: Liên kết đến trang quên mật khẩu (tùy chọn)** */}
        <p className="forgot-password">
          <a href="/forgot-password">Quên mật khẩu?</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;