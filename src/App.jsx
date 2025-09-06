import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles, Gift, Camera, MessageCircle } from 'lucide-react';
import BirthdayMagicPage from './BirthdayMagicPage.jsx';
import arushiImage from '/images/aru1.jpg';

export default function BirthdayWebpage() {
  const [currentMemory, setCurrentMemory] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [showMagicPage, setShowMagicPage] = useState(false);
  const [confetti, setConfetti] = useState([]);

  // Sample memories - replace with your actual memories
  const memories = [
    {
      title: "Our First Meet",
      description: "The day we met and I knew you were special. I was mesmerized by your small talks, coz that day I found someone truly special.",
      date: "March 21, 2023"
    },
    {
      title: "Our First I Love You",
      description: "I remember the time when we were just close friends, and then suddenly came that moment when you said 'I Love You' to me in a row - that day stayed in my heart ever since.",
      date: "January --, 2024"
    },
    {
      title: "Our Proposal",
      description: "I still remember that day in March when we had a fight and were almost about to part ways at night, but after so many talks I convinced you to stay, and when I said ‘I love you,’ you accepted.",
      date: "March 19, 2024"
    },
    {
      title: "Our First Fuck",
      description: "I still remember that moment when we were talking so calmly, and then suddenly I became a little playful and opened up more than usual. At first, I was nervous about saying those things, but you reassured me that it was okay, and from there we shared something very personal and deep for the first time. That moment made me realize how much trust and closeness we truly have.",
      date: "May --, 2025"
    }
  ];

  const promises = [
    "I promise to always be the same person for you my Arushi, that i am today",
    "I promise to you that i never leave you and never cheat on you, My place is always with you",
    "I promise to you that i will overcome my own insecurities and become the man you want me to be",
    "I promise you that i will always love you, care for you and make you happy everytime",
    "I promise to always remind you how amazing and beautiful you are 'hehe'",
    "I promise to be your partner in all of life's adventures and make you feel loved and feel special every single day"
  ];

  useEffect(() => {
    // Create floating hearts animation
    const interval = setInterval(() => {
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 3000);
    }, 5000);

    // Create confetti effect
    const confettiArray = [];
    for (let i = 0; i < 50; i++) {
      confettiArray.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2
      });
    }
    setConfetti(confettiArray);

    return () => clearInterval(interval);
  }, []);

  const nextMemory = () => {
    setCurrentMemory((prev) => (prev + 1) % memories.length);
  };

  const prevMemory = () => {
    setCurrentMemory((prev) => (prev - 1 + memories.length) % memories.length);
  };

  if (showMagicPage) {
    return <BirthdayMagicPage />;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 via-white to-rose-100 relative overflow-hidden">
      {/* Confetti Animation */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 bg-pink-400 rounded-full animate-bounce"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            top: '-10px'
          }}
        />
      ))}

      {/* Floating Hearts */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-400 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${20 + Math.random() * 20}px`
              }}
            />
          ))}
        </div>
      )}

      {/* Header Section */}
      <header className="relative py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-rose-200 opacity-50 rounded-full blur-3xl transform -translate-y-12"></div>
        <div className="relative z-10">
          <Sparkles className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-spin" />
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent mb-4 animate-pulse">
            Happy 18th Birthday
          </h1>
          <h2 className="text-2xl md:text-4xl text-pink-600 mb-6 font-light">
            To My Beautiful Wifey (Arushi Kharra) <br></br>Wishing You the Happiest Birthday, Mu Love, 
            May Your Day be as Beautiful as your Heart and As Special as You are to Me.
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <Star className="w-8 h-8 text-yellow-400 animate-bounce" />
            <Heart className="w-8 h-8 text-red-400 animate-pulse" />
            <Star className="w-8 h-8 text-yellow-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </header>

      {/* Photo Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center shadow-xl">
                <img 
                  src={arushiImage} // CHANGE THIS TO YOUR PHOTO'S NAME!
                  alt="My beautiful girlfriend" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 rounded-full border-4 border-pink-300 animate-ping opacity-30"></div>
              </div>
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-full p-3">
                <Heart className="w-6 h-6 animate-pulse" />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-4xl font-bold text-gray-800 mb-6">My Beautiful Birthday Girl</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every photo of you is a masterpiece, but none can capture the true beauty of your soul. 
                Your smile lights up my world, and your laughter is the sweetest melody I've ever heard.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">You are Beautiful</span>
                <span className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">Your are Amazing</span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Your are Perfect</span>
                <span className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">Your are Mine ❤️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Beautiful Memories
          <Sparkles className="w-8 h-8 text-pink-500 inline-block ml-3 animate-spin" />
        </h3>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold">
                <MessageCircle className="w-5 h-5" />
                Memory {currentMemory + 1} of {memories.length}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">{memories[currentMemory].title}</h4>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">{memories[currentMemory].description}</p>
              <p className="text-pink-600 font-medium">{memories[currentMemory].date}</p>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevMemory}
                className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                ← Previous
              </button>
              <button 
                onClick={nextMemory}
                className="px-6 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Promises Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Promises to You
          <Heart className="w-8 h-8 text-red-500 inline-block ml-3 animate-pulse" />
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {promises.map((promise, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border-l-4 border-pink-400"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">{promise}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Message Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-1">
          <div className="bg-white rounded-3xl p-12 text-center">
            <Gift className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl font-bold text-gray-800 mb-6">A Special Birthday Message</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              First of all, "Happy 18th Birthday My Love", On this special day, I want you to know that you are the most precious gift life has given me. 
              Your beauty, both inside and out, amazes me every single day. You make everything better just by being you. 
              I am so grateful to celebrate another year of your wonderful existence. 
              Here's to making this year the most beautiful one yet!
              You turned 18 years today, and I can't wait to see all the amazing things you'll do in this new chapter of your life. 
              On Your 18th Birthday! The world is now officially your oyster, and I can't wait to explore it with you. 
              And Please accept a small gift by your honey side (Your honey gifted you a small gift which come in 1-2 days).
              I Love You My Wifey, My Arushi, My Darling and My Everything..✨❤️
            </p>
            <div className="inline-flex items-center gap-2 text-2xl font-bold text-pink-600">
              With all my love and care ✨❤️
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Birthday Wish */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <button 
          onClick={() => setShowMagicPage(true)}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-pink-600 hover:to-rose-600 transform hover:scale-110 transition-all duration-300 shadow-2xl"
        >
          Click Here! ✨
        </button>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Heart className="w-6 h-6 text-red-500 animate-pulse" />
          <span className="text-gray-600">Made by your kishi</span>
          <Heart className="w-6 h-6 text-red-500 animate-pulse" />
        </div>
        <p className="text-pink-600 font-medium">Happy Birthday, My Wifey! 🎉</p>
      </footer>
    </div>
  );
}
