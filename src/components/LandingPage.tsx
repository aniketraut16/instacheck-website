import LiquidEther from './LiquidEther'
import { Github, Star } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className='w-full h-screen relative bg-black overflow-hidden'>      
      {/* Background Liquid Effect */}
      <LiquidEther
        colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
      
      {/* Navbar */}
      <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-[9999] px-4">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center shadow-lg">
          {/* Logo */}
          <div className="flex items-center space-x-3 mr-6">
            <img 
              src="https://raw.githubusercontent.com/aniketraut16/instacheck/refs/heads/main/extension/logo.png" 
              alt="InstaCheck" 
              className="w-7 h-7 md:w-8 md:h-8 rounded-lg"
            />
            <span className="text-white text-base md:text-lg font-semibold">InstaCheck</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden sm:flex items-center ml-auto space-x-6 md:space-x-8">
            <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm font-medium whitespace-nowrap">About</a>
            <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm font-medium whitespace-nowrap">How it works</a>
            <a href="https://github.com/aniketraut16/instacheck" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-sm font-medium whitespace-nowrap border border-white/20 rounded-full px-4 py-2 hover:border-white/40 hover:bg-white/10">
              <Star className="w-4 h-4" />
              <span>Star on github</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="sm:hidden text-white/70 hover:text-white transition-colors ml-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

     

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 max-w-4xl leading-tight">
          AI-powered fact-checking for{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            short videos.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
          InstaCheck transcribes videos, extracts claims, verifies with evidence, and flags content as authentic or misleading in real-time.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
          <a href="https://github.com/aniketraut16/instacheck" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center space-x-2">
            <Github className="w-5 h-5" />
            <span>View on Github</span>
          </a>
          <a href="https://youtu.be/nRiEk4YI8to?si=cbWAhDNdyfPCb5O8" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium hover:border-white/50 hover:bg-white/10 transition-all">
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}
