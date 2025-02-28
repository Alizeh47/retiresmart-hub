'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower, Cormorant } from 'next/font/google';
import {
  TrophyIcon,
  BookOpenIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CalculatorIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  ArrowPathIcon,
  PlayIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

const aldrich = Aldrich({
  weight: '400',
  subsets: ['latin'],
});

const robotoFlex = Roboto_Flex({
  weight: '300',
  subsets: ['latin'],
});

const newsreaderItalic = Newsreader({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

// Sample prizes
const prizes = [
  { id: 1, name: 'Free Retirement Consultation', icon: <TrophyIcon className="w-8 h-8 text-[#40A69F]" />, probability: 0.05 },
  { id: 2, name: 'Financial Planning E-Book', icon: <BookOpenIcon className="w-8 h-8 text-[#40A69F]" />, probability: 0.15 },
  { id: 3, name: 'Investment Strategy Guide', icon: <ChartBarIcon className="w-8 h-8 text-[#40A69F]" />, probability: 0.20 },
  { id: 4, name: 'Tax Planning Checklist', icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-[#40A69F]" />, probability: 0.25 },
  { id: 5, name: 'Retirement Calculator Access', icon: <CalculatorIcon className="w-8 h-8 text-[#40A69F]" />, probability: 0.20 },
  { id: 6, name: 'Newsletter Subscription', icon: <EnvelopeIcon className="w-8 h-8 text-[#40A69F]" />, probability: 0.15 },
];

export default function ClawMachinePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [clawPosition, setClawPosition] = useState({ x: 50, y: 10 });
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 10 });
  const [prize, setPrize] = useState<typeof prizes[0] | null>(null);
  const [gamePhase, setGamePhase] = useState<'ready' | 'moving' | 'dropping' | 'grabbing' | 'rising' | 'result'>('ready');
  const [tokens, setTokens] = useState(3);
  const [wonPrizes, setWonPrizes] = useState<typeof prizes>([]);
  
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  
  // Handle claw movement
  useEffect(() => {
    if (gamePhase === 'moving' && isPlaying) {
      const moveClaw = () => {
        setClawPosition(prev => {
          const dx = (targetPosition.x - prev.x) * 0.05;
          const dy = (targetPosition.y - prev.y) * 0.05;
          
          const newX = prev.x + dx;
          const newY = prev.y + dy;
          
          // Check if claw has reached target position (with some tolerance)
          if (Math.abs(newX - targetPosition.x) < 0.5 && Math.abs(newY - targetPosition.y) < 0.5) {
            setGamePhase('dropping');
            return { x: targetPosition.x, y: targetPosition.y };
          }
          
          return { x: newX, y: newY };
        });
        
        animationFrameRef.current = requestAnimationFrame(moveClaw);
      };
      
      animationFrameRef.current = requestAnimationFrame(moveClaw);
      
      return () => {
        cancelAnimationFrame(animationFrameRef.current);
      };
    }
  }, [gamePhase, isPlaying, targetPosition]);
  
  // Handle game phases
  useEffect(() => {
    if (!isPlaying) return;
    
    let timeout: NodeJS.Timeout;
    
    if (gamePhase === 'dropping') {
      timeout = setTimeout(() => {
        setClawPosition(prev => ({ x: prev.x, y: 70 }));
        setGamePhase('grabbing');
      }, 1000);
    } else if (gamePhase === 'grabbing') {
      timeout = setTimeout(() => {
        // Determine if player wins a prize
        const randomNum = Math.random();
        let cumulativeProbability = 0;
        let selectedPrize = null;
        
        for (const p of prizes) {
          cumulativeProbability += p.probability;
          if (randomNum <= cumulativeProbability) {
            selectedPrize = p;
            break;
          }
        }
        
        setPrize(selectedPrize);
        setGamePhase('rising');
      }, 1000);
    } else if (gamePhase === 'rising') {
      timeout = setTimeout(() => {
        setClawPosition(prev => ({ x: prev.x, y: 10 }));
        setGamePhase('result');
      }, 1000);
    } else if (gamePhase === 'result') {
      timeout = setTimeout(() => {
        if (prize) {
          setWonPrizes(prev => [...prev, prize]);
        }
        setIsPlaying(false);
        setGamePhase('ready');
        setClawPosition({ x: 50, y: 10 });
        setTokens(prev => prev - 1);
      }, 2000);
    }
    
    return () => {
      clearTimeout(timeout);
    };
  }, [gamePhase, isPlaying, prize]);
  
  const handleGameAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (gamePhase !== 'ready' || !isPlaying || !gameAreaRef.current) return;
    
    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setTargetPosition({ x, y: Math.min(y, 60) });
    setGamePhase('moving');
  };
  
  const startGame = () => {
    if (tokens > 0 && !isPlaying) {
      setIsPlaying(true);
      setPrize(null);
    }
  };
  
  const resetGame = () => {
    setTokens(3);
    setWonPrizes([]);
  };
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              RETIREMENT
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Prize Claw</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              GAME
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              Test Your
              <span className="block text-[#40A69F]">Retirement Luck</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Play our virtual claw machine game for a chance to win retirement planning resources.
            </p>
            <p className={`${newsreaderItalic.className} text-2xl text-gray-500 max-w-2xl mx-auto`}>
              "Luck is what happens when preparation meets opportunity."
            </p>
          </div>

          {/* Game Container */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-b from-[#E8F4F1] to-white rounded-xl p-8 shadow-lg">
              {/* Game Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className={`${cormorant.className} text-2xl font-semibold text-gray-800`}>
                    Retirement Prize Claw
                  </h3>
                  <p className={`${robotoFlex.className} text-gray-600`}>
                    Click to position the claw, then watch it drop!
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`${aldrich.className} text-xl text-[#40A69F]`}>
                    {tokens}
                  </span>
                  <PlayIcon className="w-6 h-6 text-[#40A69F]" />
                  <span className={`${robotoFlex.className} text-gray-600`}>
                    tokens left
                  </span>
                </div>
              </div>
              
              {/* Game Area */}
              <div 
                ref={gameAreaRef}
                className="relative w-full h-[400px] bg-gradient-to-b from-[#D1E8E5] to-[#F0F9F8] rounded-lg border-2 border-[#40A69F] overflow-hidden mb-6 cursor-pointer"
                onClick={handleGameAreaClick}
              >
                {/* Claw */}
                <div 
                  className="absolute w-16 h-16 transform -translate-x-1/2"
                  style={{ 
                    left: `${clawPosition.x}%`, 
                    top: `${clawPosition.y}%`,
                    transition: gamePhase === 'moving' ? 'none' : 'top 1s ease-in-out'
                  }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path 
                      d="M50,10 L50,30 M30,30 L70,30 M30,30 Q30,60 40,70 M70,30 Q70,60 60,70 M40,70 L60,70" 
                      stroke="#333" 
                      strokeWidth="5" 
                      fill="none" 
                      strokeLinecap="round"
                    />
                    {gamePhase === 'grabbing' && prize && (
                      <text x="42" y="60" fontSize="24">{prize.icon}</text>
                    )}
                  </svg>
                </div>
                
                {/* Prizes */}
                {gamePhase !== 'result' && gamePhase !== 'rising' && prizes.map((p, index) => (
                  <div 
                    key={p.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-float-slow"
                    style={{ 
                      left: `${20 + (index % 3) * 30}%`, 
                      top: `${50 + (Math.floor(index / 3) * 20)}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {p.icon}
                  </div>
                ))}
                
                {/* Game Glass Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-20 pointer-events-none"></div>
                
                {/* Result Display */}
                {gamePhase === 'result' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 p-6 rounded-xl text-center transform animate-bounce-subtle">
                      {prize ? (
                        <>
                          <div className="flex justify-center mb-2">
                            {prize.icon}
                          </div>
                          <h4 className={`${cormorant.className} text-2xl font-bold text-[#40A69F] mb-1`}>
                            You Won!
                          </h4>
                          <p className={`${robotoFlex.className} text-gray-700`}>{prize.name}</p>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-center mb-2">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className={`${cormorant.className} text-2xl font-bold text-gray-700 mb-1`}>
                            Try Again!
                          </h4>
                          <p className={`${robotoFlex.className} text-gray-600`}>Better luck next time</p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Game Controls */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={startGame}
                  disabled={isPlaying || tokens <= 0}
                  className={`px-6 py-3 rounded-lg text-white transition-colors flex items-center space-x-2 ${
                    isPlaying || tokens <= 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#40A69F] hover:bg-[#2C7A75]'
                  }`}
                >
                  <PlayIcon className="w-5 h-5" />
                  <span className={`${robotoFlex.className} font-medium`}>
                    {isPlaying ? 'Playing...' : tokens <= 0 ? 'Out of Tokens' : 'Play Now'}
                  </span>
                </button>
                
                {tokens <= 0 && (
                  <button
                    onClick={resetGame}
                    className="px-6 py-3 bg-white border border-[#40A69F] rounded-lg text-[#40A69F] hover:bg-[#E8F4F1] transition-colors flex items-center space-x-2"
                  >
                    <ArrowPathIcon className="w-5 h-5" />
                    <span className={`${robotoFlex.className} font-medium`}>Reset Game</span>
                  </button>
                )}
              </div>
              
              {/* Game Instructions */}
              <div className="mt-8 p-4 bg-white bg-opacity-70 rounded-lg border border-gray-200">
                <h4 className={`${cormorant.className} text-lg font-semibold text-gray-800 mb-2 flex items-center`}>
                  <InformationCircleIcon className="w-5 h-5 mr-2 text-[#40A69F]" />
                  How to Play
                </h4>
                <ol className={`${robotoFlex.className} text-sm text-gray-600 space-y-1 list-decimal list-inside`}>
                  <li>Click "Play Now" to start the game</li>
                  <li>Click anywhere in the game area to position the claw</li>
                  <li>The claw will automatically drop and try to grab a prize</li>
                  <li>You have {tokens} tokens remaining - use them wisely!</li>
                </ol>
              </div>
            </div>
          </div>
          
          {/* Won Prizes Section */}
          {wonPrizes.length > 0 && (
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className={`${cormorant.className} text-2xl font-semibold text-gray-800 mb-6 text-center`}>
                Your Prizes
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {wonPrizes.map((prize, index) => (
                  <div key={`${prize.id}-${index}`} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {prize.icon}
                      </div>
                      <div>
                        <h4 className={`${cormorant.className} font-semibold text-gray-800`}>{prize.name}</h4>
                        <button className="text-sm text-[#40A69F] hover:text-[#2C7A75] transition-colors flex items-center space-x-1">
                          <GiftIcon className="w-4 h-4" />
                          <span>Claim Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#40A69F] rounded-xl p-8 text-white">
              <h3 className={`${cormorant.className} text-2xl font-semibold mb-4`}>
                Ready for the Real Prize?
              </h3>
              <p className={`${robotoFlex.className} text-lg mb-6 max-w-2xl mx-auto`}>
                While games are fun, your retirement security is serious business. Schedule a consultation with our experts to create a winning retirement strategy.
              </p>
              <button className="px-6 py-3 bg-white text-[#40A69F] rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Schedule Your Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            {/* Decorative Patterns */}
            <defs>
              <pattern id="confetti" width="30" height="30" patternUnits="userSpaceOnUse">
                <rect x="10" y="5" width="3" height="3" fill="#40A69F" opacity="0.3" transform="rotate(45 10 5)" />
                <rect x="20" y="15" width="4" height="4" fill="#40A69F" opacity="0.3" transform="rotate(30 20 15)" />
                <rect x="5" y="20" width="2" height="2" fill="#40A69F" opacity="0.3" transform="rotate(15 5 20)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#confetti)" />
            
            {/* Floating Elements */}
            <g className="animate-float-slow">
              <circle cx="10%" cy="20%" r="5" fill="#40A69F" opacity="0.2" />
              <text x="10%" y="20%" fontSize="20" fill="#40A69F" opacity="0.3">🎮</text>
            </g>
            <g className="animate-float-medium">
              <circle cx="90%" cy="60%" r="8" fill="#40A69F" opacity="0.2" />
              <text x="90%" y="60%" fontSize="24" fill="#40A69F" opacity="0.3">🎯</text>
            </g>
            <g className="animate-float-fast">
              <circle cx="30%" cy="80%" r="6" fill="#40A69F" opacity="0.2" />
              <text x="30%" y="80%" fontSize="22" fill="#40A69F" opacity="0.3">🎲</text>
            </g>
            
            {/* Decorative Lines */}
            <path
              d="M0,100 Q300,150 600,100 T1200,100"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="chart-line"
            />
          </svg>
        </div>
      </section>
    </main>
  );
} 