// app/captains-log/page.tsx
import React from 'react';
import Post from '@/components/Post';  // Adjust the import based on your directory structure

export default function CaptainsLogPage() {
  const posts = [
    {
      title: "First Adventure",
      timestamp: "September 30, 2024, 10:07 PM",
      body: "Finally implemented a crude blog post system for my website. Looking for a place for posting more developed thoughts, writings, and ideas.",
    },
    // {
    //   title: "Second Adventure",
    //   timestamp: "October 1, 2024, 2:30 PM",
    //   body: "Encountered strange weather patterns, but the journey continues. Spirits are high!",
    // },
    // {
    //   title: "Reflections",
    //   timestamp: "October 3, 2024, 6:45 PM",
    //   body: "Looking back on the journey so far. Much learned, much to learn.",
    // },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center scroll-m-20 text-3xl font-semibold tracking-tight lg:text-5xl mb-8 mt-8">Captain's Log</h1>

      {/* Rendering posts with title, timestamp, and body */}
      <div className="max-w-2xl mx-auto">
        {posts.map((post, index) => (
          <Post 
            key={index} 
            title={post.title} 
            timestamp={post.timestamp} 
            body={post.body} 
          />
        ))}
      </div>
    </div>
  );
}
