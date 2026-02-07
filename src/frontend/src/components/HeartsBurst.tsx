import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
}

export default function HeartsBurst() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Generate hearts in a burst pattern
    const newHearts: Heart[] = [];
    const heartCount = 20;

    for (let i = 0; i < heartCount; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 100 - 50, // -50 to 50
        y: Math.random() * 100 - 50,
        delay: Math.random() * 0.5,
        size: Math.random() * 2 + 1 // 1 to 3
      });
    }

    setHearts(newHearts);

    // Clean up after animation completes
    const timer = setTimeout(() => {
      setHearts([]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (hearts.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute heart-burst"
          style={{
            left: '50%',
            top: '50%',
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}rem`,
            transform: `translate(${heart.x}px, ${heart.y}px)`
          }}
        >
          {Math.random() > 0.5 ? '💕' : '💖'}
        </div>
      ))}
    </div>
  );
}
