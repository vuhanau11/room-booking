import React from 'react';
import { Link } from 'react-router-dom';

export default function ListCity({ listCity }) {
  return (
    <div>
      <Link to={`/city/${listCity.id}`}>
        <div className="image-item">
          <img alt="city" src={listCity.imgUrl} />
        </div>
        <div className="text-item">
          <p>{listCity.title}</p>
          <span>
            <b>{listCity.num}</b> chỗ ở
          </span>
        </div>
      </Link>
    </div>
  );
}
