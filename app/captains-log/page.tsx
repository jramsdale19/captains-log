// app/captains-log/page.tsx
import React from 'react';
import Post from '@/components/Post';  // Adjust the path based on where your Post component is located

export default function CaptainsLogPage() {
  const posts = [
    "This is the first blog post.",
    "Another interesting post.",
    "Writing more content here.",
    "Another thought goes here.",
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Captain's Log</h1>
      <p className="text-center mb-8">This is the actual captain's log.</p>

      {/* Rendering posts */}
      <div className="max-w-2xl mx-auto">
        {posts.map((content, index) => (
          <Post key={index} content={content} />
        ))}
      </div>
    </div>
  );
}
