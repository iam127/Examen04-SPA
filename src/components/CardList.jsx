import React from 'react';
import Card from './Card';

const CardList = ({ posts, limit }) => {
  const displayPosts = limit ? posts.slice(0, limit) : posts;
  
  return (
    <div className="row">
      {displayPosts.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export default CardList;
