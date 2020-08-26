import React from 'react';
import '../styles/NotFound.css';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
          <h2>Không tìm thấy trang.</h2>
        </div>
        <Link className="btn shadow" to="/">
          về trang chủ
        </Link>
      </div>
    </div>
  );
}
