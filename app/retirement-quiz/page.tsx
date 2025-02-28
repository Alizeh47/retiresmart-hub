'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower, Lora } from 'next/font/google';
import {
  CheckIcon,
  InformationCircleIcon,
  LockClosedIcon,
  ChartBarIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  TrophyIcon,
  SparklesIcon,
  CogIcon,
  RocketLaunchIcon,
  CalendarIcon
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

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "What is your current age?",
    options: [
      { text: "Under 30", score: 1 },
      { text: "30-40", score: 2 },
      { text: "41-50", score: 3 },
      { text: "51-60", score: 4 },
      { text: "Over 60", score: 5 },
    ],
  },
  {
    id: 2,
    question: "At what age do you plan to retire?",
    options: [
      { text: "Before 55", score: 5 },
      { text: "55-60", score: 4 },
      { text: "61-65", score: 3 },
      { text: "66-70", score: 2 },
      { text: "After 70 or not sure", score: 1 },
    ],
  },
  {
    id: 3,
    question: "How much have you saved specifically for retirement so far?",
    options: [
      { text: "Nothing yet", score: 1 },
      { text: "Less than $50,000", score: 2 },
      { text: "$50,000 - $200,000", score: 3 },
      { text: "$200,000 - $500,000", score: 4 },
      { text: "More than $500,000", score: 5 },
    ],
  },
  {
    id: 4,
    question: "What percentage of your current income do you save annually?",
    options: [
      { text: "0-5%", score: 1 },
      { text: "6-10%", score: 2 },
      { text: "11-15%", score: 3 },
      { text: "16-20%", score: 4 },
      { text: "More than 20%", score: 5 },
    ],
  },
  {
    id: 5,
    question: "How would you describe your investment knowledge?",
    options: [
      { text: "Very limited", score: 1 },
      { text: "Basic understanding", score: 2 },
      { text: "Moderately knowledgeable", score: 3 },
      { text: "Advanced", score: 4 },
      { text: "Expert", score: 5 },
    ],
  },
  {
    id: 6,
    question: "How diversified is your investment portfolio?",
    options: [
      { text: "Not diversified (single investment type)", score: 1 },
      { text: "Slightly diversified (2-3 investment types)", score: 2 },
      { text: "Moderately diversified", score: 3 },
      { text: "Well diversified across multiple asset classes", score: 4 },
      { text: "Highly diversified with alternative investments", score: 5 },
    ],
  },
  {
    id: 7,
    question: "Do you have a written retirement plan?",
    options: [
      { text: "No plan at all", score: 1 },
      { text: "I have a general idea but nothing written", score: 2 },
      { text: "I have some aspects planned out", score: 3 },
      { text: "I have a mostly complete plan", score: 4 },
      { text: "I have a comprehensive written plan", score: 5 },
    ],
  },
];

// Result categories
const resultCategories = [
  {
    range: [7, 14],
    title: "Early Starter",
    description: "You're at the beginning of your retirement planning journey. Now is the perfect time to build a strong foundation for your future.",
    recommendations: [
      "Start contributing to a retirement account as soon as possible",
      "Focus on building emergency savings",
      "Learn retirement planning basics",
      "Consider meeting with a financial advisor to create a plan"
    ],
    icon: <SparklesIcon className="w-16 h-16 text-[#40A69F]" />
  },
  {
    range: [15, 21],
    title: "Building Momentum",
    description: "You've taken some important steps toward retirement planning, but there's room to strengthen your strategy.",
    recommendations: [
      "Increase your retirement contributions if possible",
      "Diversify your investment portfolio",
      "Review your retirement timeline",
      "Consider tax-efficient investment strategies"
    ],
    icon: <RocketLaunchIcon className="w-16 h-16 text-[#40A69F]" />
  },
  {
    range: [22, 28],
    title: "Steady Progress",
    description: "You're making good progress on your retirement journey with a solid foundation in place.",
    recommendations: [
      "Fine-tune your investment allocation",
      "Consider catch-up contributions if you're over 50",
      "Review your retirement income strategy",
      "Ensure you have adequate insurance coverage"
    ],
    icon: <CogIcon className="w-16 h-16 text-[#40A69F]" />
  },
  {
    range: [29, 35],
    title: "Retirement Ready",
    description: "You're well-prepared for retirement with a comprehensive strategy in place. Focus on optimizing and protecting what you've built.",
    recommendations: [
      "Review and adjust your withdrawal strategy",
      "Consider estate planning needs",
      "Optimize tax strategies for retirement",
      "Prepare for healthcare costs in retirement"
    ],
    icon: <TrophyIcon className="w-16 h-16 text-[#40A69F]" />
  }
];

export default function RetirementQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [result, setResult] = useState<typeof resultCategories[0] | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [animateQuestion, setAnimateQuestion] = useState(false);
  
  // Handle selecting an answer
  const handleAnswerSelect = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);
    
    // Short delay before moving to next question
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setAnimateQuestion(false);
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setAnimateQuestion(true);
        }, 300);
      } else {
        // Quiz complete, calculate result
        const finalScore = newAnswers.reduce((sum, score) => sum + score, 0);
        setTotalScore(finalScore);
        
        // Find the appropriate result category
        const category = resultCategories.find(
          cat => finalScore >= cat.range[0] && finalScore <= cat.range[1]
        ) || resultCategories[0];
        
        setResult(category);
        setQuizComplete(true);
      }
    }, 500);
  };
  
  // Start the quiz
  const startQuiz = () => {
    setShowIntro(false);
    setAnimateQuestion(true);
  };
  
  // Restart the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizComplete(false);
    setResult(null);
    setTotalScore(0);
    setShowIntro(true);
  };
  
  // Calculate progress percentage
  const progressPercentage = ((currentQuestion + 1) / quizQuestions.length) * 100;
  
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
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Readiness</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              ASSESSMENT
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              How Ready Are You
              <span className="block text-[#40A69F]">For Retirement?</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Take our comprehensive retirement readiness assessment to discover where you stand and what steps you should take next.
            </p>
            <p className={`${newsreaderItalic.className} text-2xl text-gray-500 max-w-2xl mx-auto`}>
              "The best time to start planning for retirement was 20 years ago. The second best time is now."
            </p>
          </div>

          {/* Quiz Container */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-b from-[#E8F4F1] to-white rounded-xl p-8 shadow-lg">
              {showIntro ? (
                /* Quiz Introduction */
                <div className="text-center">
                  <div className="mb-8">
                    <div className="w-24 h-24 mx-auto mb-4 relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="#E8F4F1" stroke="#40A69F" strokeWidth="2" />
                        <path 
                          d="M30,50 L45,65 L70,35" 
                          stroke="#40A69F" 
                          strokeWidth="5" 
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="chart-line"
                        />
                      </svg>
                    </div>
                    <h3 className={`${lora.className} text-2xl font-semibold text-gray-800 mb-4`}>
                      Retirement Readiness Quiz
                    </h3>
                    <p className={`${robotoFlex.className} text-gray-600 mb-6 max-w-2xl mx-auto`}>
                      This 7-question assessment will evaluate your current retirement preparedness and provide personalized recommendations to improve your retirement outlook.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                    <h4 className={`${lora.className} text-lg font-semibold text-gray-800 mb-3 flex items-center`}>
                      <InformationCircleIcon className="w-5 h-5 mr-2 text-[#40A69F]" />
                      What You'll Learn
                    </h4>
                    <ul className={`${robotoFlex.className} text-gray-600 space-y-2 mb-4`}>
                      <li className="flex items-start">
                        <CheckIcon className="w-5 h-5 mr-2 text-[#40A69F] mt-0.5 flex-shrink-0" />
                        <span>Your current retirement readiness score</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="w-5 h-5 mr-2 text-[#40A69F] mt-0.5 flex-shrink-0" />
                        <span>Key areas where you can improve your retirement planning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="w-5 h-5 mr-2 text-[#40A69F] mt-0.5 flex-shrink-0" />
                        <span>Personalized recommendations based on your situation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="w-5 h-5 mr-2 text-[#40A69F] mt-0.5 flex-shrink-0" />
                        <span>Next steps to enhance your retirement strategy</span>
                      </li>
                    </ul>
                    <p className={`${newsreaderItalic.className} text-sm text-gray-500 mb-4`}>
                      "This assessment takes approximately 3 minutes to complete."
                    </p>
                  </div>
                  
                  <button
                    onClick={startQuiz}
                    className="px-8 py-4 bg-[#40A69F] text-white rounded-lg font-medium hover:bg-[#2C7A75] transition-colors flex items-center space-x-2 mx-auto"
                  >
                    <CalendarIcon className="w-5 h-5" />
                    <span className={`${robotoFlex.className} font-medium`}>Start Assessment</span>
                  </button>
                </div>
              ) : quizComplete ? (
                /* Quiz Results */
                <div className="text-center">
                  <div className="mb-8">
                    <div className="w-24 h-24 mx-auto mb-4 relative">
                      {result?.icon}
                    </div>
                    <h3 className={`${lora.className} text-3xl font-semibold text-[#40A69F] mb-2`}>
                      {result?.title}
                    </h3>
                    <div className="flex justify-center items-center mb-4">
                      <div className="bg-gray-200 h-2 rounded-full w-64 mx-2">
                        <div 
                          className="bg-[#40A69F] h-2 rounded-full" 
                          style={{ width: `${(totalScore / 35) * 100}%` }}
                        ></div>
                      </div>
                      <span className={`${aldrich.className} text-lg text-gray-700`}>
                        {totalScore}/35
                      </span>
                    </div>
                    <p className={`${robotoFlex.className} text-gray-600 mb-6 max-w-2xl mx-auto`}>
                      {result?.description}
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 mb-8">
                    <h4 className={`${lora.className} text-xl font-semibold text-gray-800 mb-4`}>
                      Personalized Recommendations
                    </h4>
                    <ul className={`${robotoFlex.className} text-gray-600 space-y-3 mb-6 text-left max-w-2xl mx-auto`}>
                      {result?.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 mr-3 text-[#40A69F] mt-0.5 flex-shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={restartQuiz}
                      className="px-6 py-3 bg-white border border-[#40A69F] rounded-lg text-[#40A69F] hover:bg-[#E8F4F1] transition-colors flex items-center space-x-2 justify-center"
                    >
                      <ArrowPathIcon className="w-5 h-5" />
                      <span className={`${robotoFlex.className} font-medium`}>Retake Assessment</span>
                    </button>
                    <button
                      className="px-6 py-3 bg-[#40A69F] text-white rounded-lg font-medium hover:bg-[#2C7A75] transition-colors flex items-center space-x-2 justify-center"
                    >
                      <CalendarIcon className="w-5 h-5" />
                      <span className={`${robotoFlex.className} font-medium`}>Schedule Consultation</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Quiz Questions */
                <div>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`${robotoFlex.className} text-sm text-gray-500`}>
                        Question {currentQuestion + 1} of {quizQuestions.length}
                      </span>
                      <span className={`${robotoFlex.className} text-sm text-gray-500`}>
                        {Math.round(progressPercentage)}% Complete
                      </span>
                    </div>
                    <div className="bg-gray-200 h-2 rounded-full">
                      <div 
                        className="bg-[#40A69F] h-2 rounded-full transition-all duration-500 ease-in-out" 
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Question */}
                  <div className={`transition-opacity duration-300 ${animateQuestion ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className={`${lora.className} text-2xl font-semibold text-gray-800 mb-6`}>
                      {quizQuestions[currentQuestion].question}
                    </h3>
                    
                    {/* Answer Options */}
                    <div className="space-y-3 mb-8">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(option.score)}
                          className={`w-full text-left p-4 rounded-lg border transition-colors ${
                            answers[currentQuestion] === option.score
                              ? 'bg-[#E8F4F1] border-[#40A69F]'
                              : 'bg-white border-gray-200 hover:border-[#40A69F] hover:bg-[#F5FAFA]'
                          }`}
                        >
                          <span className={`${robotoFlex.className} text-gray-700`}>{option.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-center mb-3">
                  <LockClosedIcon className="w-12 h-12 text-[#40A69F]" />
                </div>
                <h3 className={`${lora.className} text-lg font-semibold text-gray-800 mb-2`}>
                  Private & Secure
                </h3>
                <p className={`${robotoFlex.className} text-sm text-gray-600`}>
                  Your assessment results are confidential and will only be used to provide personalized recommendations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-center mb-3">
                  <ChartBarIcon className="w-12 h-12 text-[#40A69F]" />
                </div>
                <h3 className={`${lora.className} text-lg font-semibold text-gray-800 mb-2`}>
                  Data-Driven Insights
                </h3>
                <p className={`${robotoFlex.className} text-sm text-gray-600`}>
                  Our assessment is based on financial industry best practices and retirement planning research.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-center mb-3">
                  <ArrowPathIcon className="w-12 h-12 text-[#40A69F]" />
                </div>
                <h3 className={`${lora.className} text-lg font-semibold text-gray-800 mb-2`}>
                  Regular Updates
                </h3>
                <p className={`${robotoFlex.className} text-sm text-gray-600`}>
                  We recommend retaking this assessment annually to track your progress and adjust your strategy.
                </p>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-[#40A69F] rounded-xl p-8 text-white">
              <h3 className={`${lora.className} text-2xl font-semibold mb-4`}>
                Ready for a Deeper Analysis?
              </h3>
              <p className={`${robotoFlex.className} text-lg mb-6 max-w-2xl mx-auto`}>
                While this assessment provides valuable insights, a personalized consultation with our retirement experts will give you a comprehensive strategy tailored to your unique situation.
              </p>
              <button className="px-6 py-3 bg-white text-[#40A69F] rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto">
                <CalendarIcon className="w-5 h-5" />
                <span>Schedule Your Free Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            {/* Decorative Patterns */}
            <defs>
              <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="#40A69F" opacity="0.3" />
                <circle cx="15" cy="15" r="1" fill="#40A69F" opacity="0.3" />
                <circle cx="25" cy="25" r="1" fill="#40A69F" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
            
            {/* Decorative Lines */}
            <path
              d="M0,100 Q300,150 600,100 T1200,100"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="chart-line"
            />
            <path
              d="M0,200 Q400,250 800,200 T1200,250"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="chart-line"
              style={{ animationDelay: '0.5s' }}
            />
          </svg>
        </div>
      </section>
    </main>
  );
} 