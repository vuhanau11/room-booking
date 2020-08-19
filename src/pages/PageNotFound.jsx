import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/NotFound.css';

export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="not-found">
        <p>page not found</p>
      </div>
    </>
  );
}
