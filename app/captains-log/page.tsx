// app/captains-log/page.tsx
import React from 'react';
import Post from '@/components/post.js';  // Adjust the import based on your directory structure

export default function CaptainsLogPage() {
  const posts = [
    {
      title: "Switching Provdiers",
      timestamp: "October 25, 2024, 3:48 PM",
      body: ` 
  I have decided to start making the switch over from OpenAI to Anthropic. (I do hate having to spell Anthropic though...).
  While I had been meaning to explore different models using SMDeal's prompt and code base, I had never really gotten around to it because I felt like I was in a place where the product was OK enough to try some GTM and gain traction. 
  All I had really tried was playing around with open source models in sandboxes and wasn't overally impressed.

  I was scrolling X and saw a post that peer pressured me enough to try out Anthropic. It compared OpenAI users as Imperial Japanese soldiers hiding out in caves in remote Pacific islands not knowing the war was over. 
  So I loaded up some credits, tried out the Anthropic sandbox and realized that this model unlocked the human level conversation I was looking for. 
  Pleasantly suprised, sort of feel like an idiot for not trying it sooner.
  
  It's one of those things where if everybody says it's good, it *most* likely is.`
    },

    {
      title: "Life Goals",
      timestamp: "October 24, 2024, 8:09 PM",
      body: `
  I have always had dreams, ambitions, and desires. However, because of this I have never formally laid out my life goals in a meaningful manner.
  
  Today I want to begin to outline my goals and get a clearer vision of my life and thus path forward.
  
  **1.** Become wealthy. Not rich per se, but wealthy.
  
  As Cicero said, 
  
  > "If you have a garden and a library, you have everything you need."
  
  **2.** start a company. I don&apos;t know quite when I decided this.?
  
  **3.** write a book. I have hundreds of worlds in my head and one has haunted my daydreams for years.
  
  These are just a few of the goals I have in mind. I will continue to refine and add to this list as I continue to reflect and clarify my vision. I excpect to write more about each of these goals in the future.`,
    },
    {
      title: "First Adventure",
      timestamp: "September 30, 2024, 10:07 PM",
      body: "Finally implemented a crude blog post system for my website. Looking for a place for posting more developed thoughts, writings, and ideas.",
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
