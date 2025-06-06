import React, { useState, useEffect } from 'react';

// Type definitions
interface LoaderProps {
  onComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center loader-background">
      {/* Centered Logo/Icon */}
      <div className="flex flex-col items-center space-y-6">
        
        {/* Camaleão Logo/Icon */}
        <div className="w-20 h-20 lg:w-24 lg:h-24 animate-pulse">
          <img 
            src="/camaleao.png" 
            alt="Camaleão" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Loading Dots Animation */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;