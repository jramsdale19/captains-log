// components/Post.js
import React from 'react';

const Post = ({ title, timestamp, body }) => {
  return (
    <div className="post-container bg-white shadow-lg rounded-lg p-4 mb-4">
      {/* Title with bold styling */}
      <h2 className="text-xl font-bold mb-2 text-gray-900">{title}</h2>

      {/* Timestamp with subtle styling */}
      <p className="text-sm text-gray-500 mb-4">{timestamp}</p>

      {/* Body with normal styling */}
      <p className="text-gray-800">{body}</p>
    </div>
  );
};

export default Post;
