import { useState, useRef, useEffect } from 'react';

interface ApologyInteractionProps {
  onYesClick: () => void;
}

const prompts = [
  "Please think again... 🥺",
  "Are you sure? Give me one more chance! 💔",
  "Please, I'm begging you... 😢",
  "Don't be so cruel... 😭",
  "Just one more chance, please! 🙏",
  "My heart is breaking... 💔",
  "I promise I'll change! 🥺",
  "Please reconsider... 😞"
];

export default function ApologyInteraction({ onYesClick }: ApologyInteractionProps) {
  const [promptIndex, setPromptIndex] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [attemptCount, setAttemptCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate safe bounds (keep button fully inside container)
    const maxX = container.width - button.width - 20;
    const maxY = container.height - button.height - 20;

    // Generate random position within bounds
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
    setAttemptCount(prev => prev + 1);
    setPromptIndex(prev => (prev + 1) % prompts.length);
  };

  const handleNoInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  useEffect(() => {
    // Initialize button position in center
    if (containerRef.current && noButtonRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const button = noButtonRef.current.getBoundingClientRect();
      setNoButtonPosition({
        x: (container.width - button.width) / 2,
        y: (container.height - button.height) / 2
      });
    }
  }, []);

  return (
    <div className="bg-card border-2 border-primary/20 rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8">
      {/* Question */}
      <div className="space-y-4">
        <div className="text-6xl mb-4">🥺</div>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Kiki, will you forgive me?
        </h1>
        {attemptCount > 0 && (
          <p className="text-lg md:text-xl text-accent font-medium animate-pulse">
            {prompts[promptIndex]}
          </p>
        )}
      </div>

      {/* Button container */}
      <div
        ref={containerRef}
        className="relative w-full h-64 md:h-80 bg-muted/30 rounded-2xl border border-border/50"
      >
        {/* Yes button - stays in place */}
        <button
          onClick={onYesClick}
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Yes 💕
        </button>

        {/* No button - moves around */}
        <button
          ref={noButtonRef}
          onMouseEnter={handleNoInteraction}
          onTouchStart={handleNoInteraction}
          onPointerDown={handleNoInteraction}
          style={{
            transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
          className="absolute top-0 left-0 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full shadow-lg cursor-pointer"
        >
          No 😔
        </button>
      </div>

      {attemptCount > 0 && (
        <p className="text-sm text-muted-foreground">
          Attempts to say no: {attemptCount} 💔
        </p>
      )}
    </div>
  );
}
