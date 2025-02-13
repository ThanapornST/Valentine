import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface Heart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

export function HeartConfetti() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: Heart = {
        id: Math.random(),
        x: Math.random() * 100,
        size: Math.random() * (30 - 15) + 15,
        delay: Math.random() * 2,
        duration: Math.random() * (8 - 5) + 5,
        rotation: Math.random() * 360,
      };
      setHearts(prev => [...prev, newHeart]);
      
      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, newHeart.duration * 1000);
    };

    // Create initial hearts
    for (let i = 0; i < 10; i++) {
      createHeart();
    }

    // Continuously create new hearts
    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute top-0"
          style={{
            left: `${heart.x}%`,
            animation: `fall ${heart.duration}s linear ${heart.delay}s`,
            transform: `rotate(${heart.rotation}deg)`,
          }}
        >
          <Heart
            className="text-pink-400"
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
            fill="currentColor"
          />
        </div>
      ))}
    </div>
  );
}