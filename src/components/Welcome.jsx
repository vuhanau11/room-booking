import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="welcome">
      <div className="welcome-text">
        <div className="title">
          {user ? (
            <h3>
              Chào mừng đến với Luxstay, {user.firstName} {user.lastName}!
            </h3>
          ) : (
            <h3>Chào mừng đến với Luxstay!</h3>
          )}
        </div>
        <p>
          Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên
          Luxstay
        </p>
        {user ? null : (
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
        )}
      </div>
    </div>
  )
}
