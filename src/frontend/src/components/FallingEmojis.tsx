import { useEffect, useState } from 'react';

interface Emoji {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
}

const sadEmojis = ['😢', '😭', '😞', '🥺', '💔'];

export default function FallingEmojis() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    let emojiId = 0;

    const spawnEmoji = () => {
      const newEmoji: Emoji = {
        id: emojiId++,
        emoji: sadEmojis[Math.floor(Math.random() * sadEmojis.length)],
        left: Math.random() * 100,
        duration: 3 + Math.random() * 4, // 3-7 seconds
        delay: 0
      };

      setEmojis(prev => [...prev, newEmoji]);

      // Remove emoji after animation completes
      setTimeout(() => {
        setEmojis(prev => prev.filter(e => e.id !== newEmoji.id));
      }, (newEmoji.duration + newEmoji.delay) * 1000);
    };

    // Spawn initial batch
    for (let i = 0; i < 5; i++) {
      setTimeout(spawnEmoji, i * 200);
    }

    // Continue spawning emojis
    const interval = setInterval(spawnEmoji, 400);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="falling-emoji"
          style={{
            left: `${emoji.left}%`,
            animationDuration: `${emoji.duration}s`,
            animationDelay: `${emoji.delay}s`
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
}
