import React from 'react';

const Card = ({ title, body, userId }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div 
          className="card-header text-white fw-bold" 
          style={{ backgroundColor: '#007bff' }}
        >
          <span className="badge bg-light text-dark">User {userId}</span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
