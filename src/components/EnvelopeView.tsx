import React from 'react';
import { Heart, Mail } from 'lucide-react';

interface EnvelopeViewProps {
  onNext: () => void;
}

export function EnvelopeView({ onNext }: EnvelopeViewProps) {
  return (
    <div className="text-center max-w-md w-full space-y-6">
      {/* Floating hearts */}
      <div className="flex justify-center gap-2">
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

      {/* Envelope */}
      <div className="relative w-64 h-48 mx-auto">
        <Mail 
          className="w-full h-full text-pink-400"
          fill="#FDF2F8"
        />
      </div>

      {/* Text */}
      <div className="space-y-3">
        <p className="text-pink-500 text-xl font-medium uppercase tracking-wide">
          Knock Knock!
        </p>
        <p className="text-pink-400 text-lg">
          You've got a letter just for you
        </p>
      </div>

      {/* Button */}
      <button
        onClick={onNext}
        className="px-8 py-3 bg-pink-400 text-white rounded-full font-medium
          transition-all duration-300 hover:bg-pink-500 hover:shadow-lg
          flex items-center justify-center gap-2 mx-auto"
      >
        <span>Click to open it</span>
      </button>
    </div>
  );
}