import React from 'react';
import ReactMarkdown from 'react-markdown';

const Post = ({ title, timestamp, body }) => {
  return (
    <div className="post-container bg-white shadow-lg rounded-lg p-6 mb-6">
      {/* Title with bold styling */}
      <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
      
      {/* Timestamp with subtle styling */}
      <p className="text-sm text-gray-500 mb-4">{timestamp}</p>
      
      {/* Body with Markdown rendering */}
      <div className="prose prose-gray max-w-none">
        <ReactMarkdown
          components={{
            h2: ({node, ...props}) => (
              <h2 className="text-xl font-bold mt-6 mb-4" {...props} />
            ),
            p: ({node, ...props}) => (
              <p className="text-gray-800 mb-4 leading-relaxed" {...props} />
            ),
            blockquote: ({node, ...props}) => (
              <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-700" {...props} />
            ),
            strong: ({node, ...props}) => (
              <strong className="font-bold" {...props} />
            ),
            em: ({node, ...props}) => (
              <em className="italic" {...props} />
            ),
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Post;