// components/Post.js
import React from 'react';

const Post = ({ content }) => {
  return (
    <div className="post-container bg-white shadow-lg rounded-lg p-4 mb-4">
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

export default Post;