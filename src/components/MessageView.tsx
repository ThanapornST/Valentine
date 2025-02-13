import React from 'react';
import { Heart } from 'lucide-react';

interface MessageViewProps {
  onNext: () => void;
}

export function MessageView({ onNext }: MessageViewProps) {
  return (
    <div className="text-center max-w-md w-full animate-fade-in">
      {/* Floating hearts */}
      <div className="flex justify-center gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <Heart 
            key={i} 
            className="text-pink-400 animate-bounce" 
            style={{ 
              animationDelay: `${i * 0.2}s`,
              width: '20px',
              height: '20px'
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Main content */}
      <div className="space-y-4 mb-8">
        <p className="text-pink-500 text-lg font-medium">
          Thank you for coming into my life.
        </p>
        <p className="text-pink-500 text-lg font-medium">
          When I'm with you, I'm so happy
        </p>
        <p className="text-pink-500 text-lg font-medium">
        I did not do this work myself. If one day he's good, 
        he'll do it again for me. 
        It would probably be even more beautiful.        </p>
        <p className="text-pink-500 text-xl font-semibold">
          Happy Valentine's Day
        </p>
      </div>

      {/* Heart with message */}
      <div className="relative w-64 h-64 mx-auto mb-8">
        <div className="absolute inset-0 bg-pink-300 rounded-full transform rotate-45 scale-75"></div>
        <div className="absolute inset-0 bg-pink-300 rounded-full transform -rotate-45 scale-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl font-script transform -rotate-12">
            Happy<br/>Valentine's<br/>Day
          </p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onNext}
        className="px-8 py-3 bg-pink-400 text-white rounded-full font-medium
          transition-all duration-300 hover:bg-pink-500 hover:shadow-lg
          flex items-center justify-center gap-2 mx-auto"
      >
        <Heart className="w-4 h-4" fill="currentColor" />
        <span>วาเลนไทน์แสนหวาน</span>
      </button>
    </div>
  );
}