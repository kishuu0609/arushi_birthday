import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function BirthdayMagicPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-100 to-pink-200 relative p-8">
      <div className="relative z-10 animate-fade-in-up">
        <Sparkles className="w-20 h-20 text-pink-600 mx-auto mb-6 animate-spin-slow" />
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-600 animate-pulse-slow">
          Happy 18th Birthday Again, My Love! (Arushi Kharra)
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-purple-800 font-light">
          I Love You✨❤️ <br></br>
          I am glad to be with you..
        </p>
      </div>
      {/* You can add more simple text or other elements here if you want! */}
      <div className="mt-12 flex flex-col items-center">
        <Heart className="w-24 h-24 text-pink-500 opacity-80 animate-pulse-fast" />
        <p className="mt-4 text-2xl text-purple-700 font-semibold">I hope you liked this Birthday Gift..<br></br>It's not just a gift, but a little expression of my feelings for you.</p>
      </div>
    </div>
  );
}