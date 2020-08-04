import React from 'react';
import '../styles/HomeScreen.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  return (
    <main>
      <div className="welcome">
        <div className="welcome-text">
          <div className="title">
            <h3>Chào mừng đến với Luxstay!</h3>
          </div>
          <p>
            Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên
            Luxstay
          </p>
          <p>
            <u>
              <Link to="/login" className="regis">
                Đăng nhập
              </Link>
            </u>
            <span> hoặc </span>
            <u>
              <Link to="/register" className="regis">
                Đăng ký
              </Link>
            </u>
            &nbsp;để trải nghiệm !
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
