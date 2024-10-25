// app/captains-log/page.tsx
import React from 'react';
import Post from '@/components/post.js';  // Adjust the import based on your directory structure

export default function CaptainsLogPage() {
  const posts = [
    {
      title: "First Adventure",
      timestamp: "September 30, 2024, 10:07 PM",
      body: "Finally implemented a crude blog post system for my website. Looking for a place for posting more developed thoughts, writings, and ideas.",
    },
    {
      title: "Life Goals",
      timestamp: "October 24, 2024, 8:09 PM",
      body: `
  I have always had dreams, ambitions, and desires. However, because of this I have never formally laid out my life goals in a meaningful manner.
  
  Today I want to begin to outline my goals and get a clearer vision of my life and thus path forward.

  As Cicero said, 
  
  > "If you have a garden and a library, you have everything you need."
  
  The first goal is to become wealthy. Not rich per se, but wealthy. I think my grandfather Big Honey is wealthy.
  
  The second goal is to start a company. I don&apos;t know quite when I decided this. Was it when I was young, making little popsicle-stick cotton-ball UT crafts and trying to sell them for a quarter?
  
  The third goal is to write a book. I have hundreds of worlds in my head and one has haunted my daydreams for years.`
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center scroll-m-20 text-3xl font-semibold tracking-tight lg:text-5xl mb-8 mt-8">Captain&apos;s Log</h1>

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
