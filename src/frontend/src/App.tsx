import { useState } from 'react';
import ApologyInteraction from './components/ApologyInteraction';
import HeartsBurst from './components/HeartsBurst';
import FallingEmojis from './components/FallingEmojis';
import BeggingCatAnimation from './components/BeggingCatAnimation';
import { Heart } from 'lucide-react';

function App() {
  const [forgiven, setForgiven] = useState(false);

  const handleYesClick = () => {
    setForgiven(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 pb-20 relative overflow-hidden">
      {/* Falling emojis - active after forgiveness */}
      {forgiven && <FallingEmojis />}

      {/* Main content */}
      <main className="w-full max-w-2xl z-10 flex-1 flex items-center justify-center">
        {!forgiven ? (
          <ApologyInteraction onYesClick={handleYesClick} />
        ) : (
          <div className="relative w-full">
            <HeartsBurst />
            <div className="bg-card border-2 border-primary/20 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-center space-y-6 float-animation relative">
              <div className="text-6xl mb-4">💝</div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Thank You! 🥺
              </h1>
              <div className="space-y-4 text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
                <p>
                  sorry mujhe maaf kardo, mere bolne se aapko shak lagta hai but mai nahi karta hun shak aapse , sorry kiki aaj se try karunga sahi se baat karne ka,  I'm really sorry aapko asa feel karane keliye
                </p>
                <p className="text-xl md:text-2xl font-semibold text-primary">
                  Please forgive me... 😭😭😭
                </p>
              </div>
              <div className="flex justify-center gap-2 text-3xl sm:text-4xl mt-6">
                <span>😢</span>
                <span>😭</span>
                <span>🥺</span>
                <span>😞</span>
                <span>💔</span>
              </div>
              
              {/* Begging cat animation - positioned below all text with proper spacing */}
              <div className="pt-8 pb-4">
                <BeggingCatAnimation />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-4 left-0 right-0 text-center text-sm text-muted-foreground z-10 px-4">
        <p>
          © 2026. Built with <Heart className="inline w-4 h-4 text-primary fill-primary" /> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
